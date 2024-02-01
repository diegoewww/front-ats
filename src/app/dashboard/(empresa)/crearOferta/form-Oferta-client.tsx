/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import React, { useState } from 'react'
import {
  validationCrearOfertaSchema,
  ValidationCrearOfertaSchema
} from '@/schemas/crearOferta.schema'
import { Button } from '@nextui-org/button'
// import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import StepForm, { Step } from '@/components/atoms/StepForm/StepForm'
import Step1 from '@/components/molecule/stepsCreatePuesto/Step1'
import Step2 from '@/components/molecule/stepsCreatePuesto/Step2'
import Step3 from '@/components/molecule/stepsCreatePuesto/Step3'
// import { MenuItem } from 'primereact/menuitem'
import Step4 from '@/components/molecule/stepsCreatePuesto/step4'
// import { postOffers } from '@/service/offers'
// import { Offer } from '@/service/interface'
import useToast from '@/hooks/useToast'
import ToastAtom from '@/components/atoms/Toast/Toast'
// import { Oferta } from '@/service/types/databaseExtensionSupabbase'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { createOffer } from '@/service/supabase/supabaseClient'

function getStepContent (step: number, offerData: any) {
  switch (step) {
    case 0:
      return <Step1 offerData={offerData} />
    case 1:
      return <Step2 offerData={offerData} />
    case 2:
      return <Step3 />
    case 3:
      return <Step4 offerData={offerData} />
    default:
      return 'Unknown step'
  }
}

export default function CrearOferta ({
  defaultValuesData,
  offerData
}: {
  defaultValuesData: ValidationCrearOfertaSchema
  offerData: any
}) {
  // const supabase = createClientComponentClient()
  const { toast } = useToast({ message: 'Oferta creada con exito', color: 'success' })
  const [activeIndex, setActiveIndex] = useState<number>(0)
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoading] = useState<boolean>(false)

  const steps: Step[] = [
    {
      label: 'Información general'
    },
    {
      label: 'Detalles',
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

  const currentValidationSchemaYup = validationCrearOfertaSchema[activeIndex] // <--Iteracion de los esquemas de validacion
  console.log('active index:', activeIndex)

  const methods = useForm<ValidationCrearOfertaSchema>({
    shouldUnregister: false, // <-- nesesario para que el StepForm funcione
    defaultValues: defaultValuesData, // <-- recomendado tener los valores por defecto
    resolver: yupResolver<ValidationCrearOfertaSchema>(
      currentValidationSchemaYup
    ),
    mode: 'onChange'
  })

  const { handleSubmit, trigger } = methods

  // const postOfferSupabase = async (offer: offerType) => {
  //   const { data, error } = await supabase.from('trabajo').insert([offer]).select()
  //   return { data, error }
  // }
  // const onSubmit = data => console.log(data);
  const onSubmit = (data: any) => {
    console.log('Full form data', data)
  }
  // {
  //   // Aca se puede hacer el fetch a la api
  //   // const { data: { user } } = await supabase.auth.getUser()
  //   // console.log(user)
  //   // const dataSupabase = {
  //   //   tittle: 'tittle' in data ? data.tittle : '',
  //   //   puesto_col: 'puesto' in data ? data.puesto?.id : '',
  //   //   ubicacion_col: 'ubicacion' in data ? data.ubicacion?.id : '',
  //   //   ageExp_col: 'ageExp' in data ? data.ageExp?.id : '',
  //   //   conocimientos_col: 'conocimientos' in data ? data.conocimientos?.id : '',
  //   //   estudios_col: 'estudios' in data ? data.estudios?.id : '',
  //   //   idiomas_col: 'idiomas' in data ? data.idiomas?.id : '',
  //   //   sueldo: 'sueldo' in data ? data.sueldo : '',
  //   //   contrato: 'contrato' in data ? data.contrato : '',
  //   //   nivelExp: 'nivelExp' in data ? data.nivelExp : '',
  //   //   jornada: 'jornada' in data ? data.jornada : '',
  //   //   modalidad: 'modalidad' in data ? data.modalidad : '',
  //   //   description: 'description' in data ? data.description : '',
  //   //   recruiter_id: user?.id
  //   // }

  //   // setIsLoading(true)
  //   // await postOfferSupabase(dataSupabase as unknown as offerType)
  //   // // console.log(datapost, error)
  //   // setIsLoading(false)
  //   // reset()
  //   // show()
  //   // setActiveIndex(0)
  // }

  // const onSubmitAPI = async () => {
  //   const { data: { user } } = await supabase.auth.getUser()
  //   console.log(user)
  //   const dataSupabase: Oferta = {
  //     id: 70,
  //     recruiter: {
  //       id: user?.id as string,
  //       provider: 'email',
  //       form: false
  //     },
  //     position: 'Nueva oferta',
  //     typoOfContract: {
  //       id: 1,
  //       description: 'Indeterminado'
  //     },
  //     levelOfExperience: {
  //       id: 2,
  //       description: 'Junior'
  //     },
  //     workingHours: {
  //       id: 2,
  //       description: '300'
  //     },
  //     modality: {
  //       id: 1,
  //       description: 'Remoto'
  //     },
  //     area: {
  //       id: 1,
  //       description: 'Tecnología'
  //     },
  //     subArea: {
  //       id: 2,
  //       area: {
  //         id: 2,
  //         description: 'Ventas'
  //       },
  //       description: 'Estrategias de Ventas Digitales'
  //     },
  //     country: {
  //       id: 1,
  //       description: 'Perú'
  //     },
  //     location: {
  //       id: 2,
  //       country: null,
  //       description: 'Lima'
  //     },
  //     sueldoMinimo: 2000,
  //     sueldoMaximo: 4000,
  //     currency: {
  //       id: 1,
  //       description: 'Dolares'
  //     },
  //     description: 'NodeJS',
  //     yearsOfExp: 1,
  //     skills: [
  //       {
  //         id: 1,
  //         description: 'PostgreSQL'
  //       },
  //       {
  //         id: 2,
  //         description: 'NodeJS'
  //       }
  //     ],
  //     minAge: 18,
  //     maxAge: 50,
  //     minStudyGrade: {
  //       id: 3,
  //       description: 'Educación Superior'
  //     },
  //     languages: [
  //       {
  //         id: 1,
  //         description: 'Spanish'
  //       },
  //       {
  //         id: 2,
  //         description: 'English'
  //       }
  //     ]
  //   }

  //   setIsLoading(true)

  //   try {
  //     const { oferta } = await createOffer(dataSupabase)
  //     console.log('Oferta creada con éxito: ', oferta)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleNext = async () => {
    const isStepValid = await trigger()
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const formData = methods.getValues()
    console.log('Currente Step Data:', formData)
    if (isStepValid) {
      setActiveIndex((prevActiveStep) => prevActiveStep + 1)
    }
    console.log(isStepValid)
  }

  const handleBack = () => {
    setActiveIndex((prevActiveStep) => prevActiveStep - 1)
  }

  // const handleReset = () => {
  //   setActiveIndex(0)
  //   reset()
  // }

  return (
    <>
      <div className='flex justify-center items-center h-[87vh]'>
        <div className='rounded-xl max-w-3xl w-[600px] p-5 shadow-xl'>
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='flex flex-col gap-11'>
                {getStepContent(activeIndex, offerData)}

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
                        <Button color='secondary' type='submit' isLoading={isLoading}>
                          Submit
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
    </>
  )
}
