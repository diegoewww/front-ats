'use client'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { User } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { handleEditEmpresa } from '@/service/supabase/authClient/Empresa/editEmpresa'
import { toast } from 'sonner'
import updateEmpresaData from '@/schemas/updateEmpresaData'

interface FormData {
  company_name: string
  company_address: string
  name_recruiter: string
}

export default function FormEditProfileE ({ user }: { user: User | null }) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(updateEmpresaData)
  })

  const onSubmitHandler = async (formData: FormData) => {
    const { error } = await handleEditEmpresa({
      companyName: formData.company_name,
      companyAddress: formData.company_address,
      nameRecruiter: formData.name_recruiter
    })
    if (error !== null) {
      toast.error(error.message)
      return
    }
    toast.success('Datos actualizados')
    router.refresh()
    window.location.reload()
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='grid grid-cols-2 gap-8 w-full max-w-4xl mx-auto'>
      <div className='col-span-1'>
        <Input
          aria-label='Nombre de la empresa'
          label='Nombre de la empresa'
          labelPlacement='inside'
          variant='bordered'
          defaultValue={user?.user_metadata.company_name}
          {...register('company_name')}
          errorMessage={errors.company_name?.message}
          isInvalid={!(errors.company_name == null)}
        />
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='nombre del reclutador'
          label='Nombre del reclutador'
          labelPlacement='inside'
          variant='bordered'
          defaultValue={user?.user_metadata.name_recruiter}
          {...register('name_recruiter')}
          errorMessage={errors.name_recruiter?.message}
          isInvalid={!(errors.name_recruiter == null)}
        />
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Email'
          label='Email'
          labelPlacement='inside'
          type='email'
          variant='bordered'
          value={user?.email}
          isDisabled
          {...register('email')}
          errorMessage={errors.email?.message}
          isInvalid={!(errors.email == null)}
          className='w-full'
        />
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Dirección de la empresa'
          label='Dirección de la empresa'
          labelPlacement='inside'
          variant='bordered'
          defaultValue={user?.user_metadata.company_address}
          {...register('company_address')}
          errorMessage={errors.company_address?.message}
          isInvalid={!(errors.company_address == null)}
        />
      </div>

      <div className='col-span-2 flex'>
        <Button type='submit' className='col-span-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' isLoading={isSubmitting}>
          Guardar
        </Button>
      </div>
    </form>
  )
}
