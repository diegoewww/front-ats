/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import StepForm, { Step } from '../StepForm/StepForm'
import ToastAtom from '../Toast/Toast'
import { Button } from '@nextui-org/button'
import { ValidationCrearOfertaSchemaOptional, validationCrearOfertaSchemaoptional } from '@/schemas/crearOferta.schema'
import { yupResolver } from '@hookform/resolvers/yup'
import Step1 from '@/components/molecule/stepsCreatePuesto/Step1'
import Step2 from '@/components/molecule/stepsCreatePuesto/Step2'
import Step3 from '@/components/molecule/stepsCreatePuesto/Step3'
import Step4 from '@/components/molecule/stepsCreatePuesto/step4'
import { useState } from 'react'
import useToast from '@/hooks/useToast'
// import { MenuItem } from 'primereact/menuitem'
import { createTemplate, updateTemplate } from '@/service/offers'
import { Template } from '@/service/types/interface'
import { useRouter, useParams } from 'next/navigation'

function getStepContent (step: number) {
  switch (step) {
    case 0:
      return <Step1 />
    case 1:
      return <Step2 />
    case 2:
      return <Step3 />
    case 3:
      return <Step4 />
    case 4:
    default:
      return 'Unknown step'
  }
}

export default function CrearOfertaForm ({ defaultValuesDataProps }: { defaultValuesDataProps: ValidationCrearOfertaSchemaOptional }) {
  const router = useRouter()
  const params = useParams()
  const { toast, show } = useToast({ message: 'Oferta creada con exito', color: 'success' })
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // const steps: MenuItem[] = [{
  //   label: 'Datos de la oferta'
  // }, {
  //   label: 'Datos de la oferta II',

  //   disabled: activeIndex < 1
  // },
  // {
  //   label: 'Descripción',

  //   disabled: activeIndex < 2

  // },
  // {
  //   label: 'Requisitos',

  //   disabled: activeIndex < 3
  // }]
  const steps: Step[] = [
    {
      label: 'Datos de la oferta'
    },
    {
      label: 'Datos de la oferta II',
      disabled: activeIndex < 1
    },
    {
      label: 'Descripción',
      disabled: activeIndex < 2
    },
    {
      label: 'Requisitos',
      disabled: activeIndex < 3
    }
  ]

  const currentValidationSchemaYup = validationCrearOfertaSchemaoptional[activeIndex] // <--Iteracion de los esquemas de validacion

  const methods = useForm<ValidationCrearOfertaSchemaOptional>({
    shouldUnregister: false, // <-- nesesario para que el StepForm funcione
    defaultValues: defaultValuesDataProps, // <-- recomendado tener los valores por defecto
    resolver: yupResolver<ValidationCrearOfertaSchemaOptional>(
      currentValidationSchemaYup
    ),
    mode: 'onChange'
  })

  const { handleSubmit, trigger, reset } = methods
  const onSubmit: SubmitHandler<ValidationCrearOfertaSchemaOptional> = async (data) => {
    // Aca se puede hacer el fetch a la api

    if (params.id !== undefined) {
      setIsLoading(true)
      await updateTemplate(data as Template)
      setIsLoading(false)
    } else {
      setIsLoading(true)
      await createTemplate(data as Template)
      setIsLoading(false)
    }
    show()
    router.refresh()
    router.push('/template')
    setActiveIndex(0)
    reset()
  }

  const handleNext = async () => {
    const isStepValid = await trigger()
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (isStepValid) setActiveIndex((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveIndex((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className='flex justify-center items-center h-[87vh]'>
      <div className='bg-surfaceCard rounded-xl max-w-3xl w-[600px] p-5 shadow-xl'>
        <StepForm
          items={steps}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          readOnly={false}
        />
        <ToastAtom toast={toast} />
        <FormProvider {...methods}>
          <form
            className='mt-12'
          >
            <div className='flex flex-col gap-11'>
              {getStepContent(activeIndex)}

              <div className='flex justify-between'>
                <Button
                  isDisabled={activeIndex === 0}
                  type='button'
                  color='secondary'
                  onClick={handleBack}
                >
                  Back
                </Button>

                <div className='flex gap-3'>

                  {/* // button next and submit */}
                  {activeIndex === steps.length - 1
                    ? (
                      <Button color='secondary' type='button' isLoading={isLoading} onClick={handleSubmit(onSubmit)}>
                        Guardar como template
                      </Button>
                      )
                    : (
                      <Button
                        color='secondary' type='button' onClick={handleNext}
                      >
                        Next
                      </Button>
                      )}

                </div>

              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
