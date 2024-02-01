'use client'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import changePassword from '@/schemas/changePassword'
import { handleEditPasswordAplicante } from '@/service/supabase/authClient/Usuario/editPassword'
import { toast } from 'sonner'

interface FormData {
  password: string
  confirmPassword: string
  currentPassword: string
}

export default function FormChangePassword () {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(changePassword)
  })

  const onSubmitHandler = async (formData: FormData) => {
    const { error } = await handleEditPasswordAplicante({ password: formData.password })

    if (error !== null) {
      toast.error(error.message)
      return
    }
    toast.success('Contraseña actualizada')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto'>
      <Input
        label='Nueva contraseña'
        labelPlacement='inside'
        type='password'
        variant='bordered'
        {...register('password')}
        errorMessage={errors.password?.message}
        isInvalid={!(errors.password == null)}
      />
      <Input
        label='Vuelva a escribir su contraseña'
        labelPlacement='inside'
        type='password'
        variant='bordered'
        {...register('confirmPassword')}
        errorMessage={errors.confirmPassword?.message}
        isInvalid={!(errors.confirmPassword == null)}
      />
      <Input
        label='Contraseña actual'
        labelPlacement='inside'
        type='password'
        variant='bordered'
        description='(Necesitamos su contraseña actual para confirmar los cambios)'
        {...register('currentPassword')}
        errorMessage={errors.currentPassword?.message}
        isInvalid={!(errors.currentPassword == null)}
      />
      <div className='flex'>
        <Button type='submit' className='col-span-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' isLoading={isSubmitting}>
          Actualizar
        </Button>
      </div>
    </form>
  )
}
