'use client'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Select, SelectItem } from '@nextui-org/select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import changeAplicanteDetail from '@/schemas/changeAplicanteDetail'
import { User } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { handleEditUserAplicante } from '@/service/supabase/authClient/Usuario/editUser'
import { toast } from 'sonner'

interface FormData {
  firstName: string
  lastName: string
  dni: string
  phone: string
}

export default function FormEditProfile ({ user }: { user: User | null }) {
  // const { data: { user } } = await supabase.auth.getUser()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(changeAplicanteDetail)
  })

  const onSubmitHandler = async (formData: FormData) => {
    const { error } = await handleEditUserAplicante({
      name: formData.firstName,
      lastName: formData.lastName,
      phone: +formData.phone,
      dni: +formData.dni
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

  const paises = ['País A', 'País B', 'País C', 'País D']
  const departamentos = ['Departamento 1', 'Departamento 2', 'Departamento 3', 'Departamento 4']

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='grid grid-cols-2 gap-8 w-full max-w-4xl mx-auto'>
      <div className='col-span-1'>
        <Input
          aria-label='Nombres'
          label='Nombres'
          labelPlacement='inside'
          variant='bordered'
          defaultValue={user?.user_metadata.name}
          {...register('firstName')}
          errorMessage={errors.firstName?.message}
          isInvalid={!(errors.firstName == null)}
        />
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Apellidos'
          label='Apellidos'
          labelPlacement='inside'
          variant='bordered'
          defaultValue={user?.user_metadata.last_name}
          {...register('lastName')}
          errorMessage={errors.lastName?.message}
          isInvalid={!(errors.lastName == null)}
        />
      </div>
      <div className='col-span-2'>
        <Input
          aria-label='Email'
          label='Email'
          labelPlacement='inside'
          type='email'
          variant='bordered'
          // defaultValue={user?.email}
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
          aria-label='Teléfono'
          label='Teléfono'
          labelPlacement='inside'
          type='number'
          variant='bordered'
          defaultValue={user?.user_metadata.phone}
          {...register('phone')}
          errorMessage={errors.phone?.message}
          isInvalid={!(errors.phone == null)}
        />
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Documento'
          label='Documento'
          labelPlacement='inside'
          type='number'
          variant='bordered'
          defaultValue={user?.user_metadata.dni}
          {...register('dni')}
          errorMessage={errors.dni?.message}
          isInvalid={!(errors.dni == null)}
        />
      </div>
      {/* Dropdown para País */}
      <div className='col-span-1'>
        <Select
          aria-label='País'
          placeholder='País'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
          }}
        >
          {paises.map((pais, index) => (
            <SelectItem key={index} value={pais}>
              {pais}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='col-span-1'>
        <Select
          aria-label='Departamento'
          placeholder='Departamento'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
          }}
        >
          {departamentos.map((departamento, index) => (
            <SelectItem key={index} value={departamento}>
              {departamento}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='col-span-2 flex'>
        <Button type='submit' className='col-span-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' isLoading={isSubmitting}>
          Guardar
        </Button>
      </div>
    </form>
  )
}
