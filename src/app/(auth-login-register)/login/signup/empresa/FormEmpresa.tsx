/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { Input } from '@nextui-org/input'
import { signUpEmresa } from '@/lib/actions/EmpresaLogin/actions'
import { useFormState } from 'react-dom'
import { SubmitButton } from '../../SubmitButton'
import { useEffect } from 'react'
import { toast } from 'sonner'

export default function FormEmpresa ({ message }: { message: string }) {
  const [errors, formAction] = useFormState(signUpEmresa, null)

  useEffect(() => {
    if (errors != null || message !== '')toast.error('No se pudo iniciar sesión, compruebe sus datos')
  }, [errors, message])

  return (
    <form action={formAction} className='grid grid-cols-1 gap-12'>
      <div>
        <Input
          label='Nombre de la empresa'
          labelPlacement='inside'
          name='companyName'
          isInvalid={(errors?.companyName != null)}
          errorMessage={errors?.companyName}
        />
      </div>
      <div>
        <Input
          label='Nombre reclutador'
          labelPlacement='inside'
          name='recruiterName'
          isInvalid={(errors?.recruiterName != null)}
          errorMessage={errors?.recruiterName}
        />
      </div>
      <div>
        <Input
          label='Dirección de la empresa'
          labelPlacement='inside'
          name='companyAddress'
          isInvalid={(errors?.companyAddress != null)}
          errorMessage={errors?.companyAddress}
        />
      </div>
      <div>
        <Input
          label='Correo electrónico'
          labelPlacement='inside'
          name='companyEmail'
          isInvalid={(errors?.companyEmail != null)}
          errorMessage={errors?.companyEmail}
          type='email'
        />
      </div>
      <div>
        <Input
          label='Contraseña'
          labelPlacement='inside'
          name='companyPassword'
          isInvalid={(errors?.companyPassword != null)}
          errorMessage={errors?.companyPassword}
          type='password'
        />
      </div>
      {
        (message !== '') && (
          <div className='col-span-1 justify-center'>
            <span className='text-danger-400'>{message}</span>
          </div>

        )
      }
      <div className='col-span-1 flex justify-center'>
        <SubmitButton />
      </div>
    </form>
  )
}
