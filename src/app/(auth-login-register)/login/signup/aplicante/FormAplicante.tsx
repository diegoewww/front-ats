/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Input } from '@nextui-org/input'
import { SubmitButton } from '../../SubmitButton'
import { signUp } from '@/lib/actions/UserLogin/actions'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { useEffect } from 'react'

export default function FormAplicante ({ message }: { message: string }) {
  const [error, formAction] = useFormState(signUp, null)

  useEffect(() => {
    if (error != null || message !== '')toast.error('No se puedo iniciar sesión, compruebe sus datos')
  }, [error, message])

  return (
    <form action={formAction} className='grid grid-cols-2 gap-12'>
      <div>
        <Input
          label='Nombres'
          labelPlacement='inside'
          name='firstName'
          isInvalid={(error?.firstName != null)}
          errorMessage={error?.firstName}
        />
      </div>
      <div>
        <Input
          label='Apellidos'
          labelPlacement='inside'
          name='lastName'
          isInvalid={(error?.lastName != null)}
          errorMessage={error?.lastName}
        />
      </div>
      <div>
        <Input
          label='Documento'
          labelPlacement='inside'
          type='number'
          name='dni'
          isInvalid={(error?.dni != null)}
          errorMessage={error?.dni}
        />
      </div>
      <div>
        <Input
          label='Teléfono'
          labelPlacement='inside'
          type='number'
          name='phone'
          isInvalid={(error?.phone != null)}
          errorMessage={error?.phone}
        />
      </div>
      <div>
        <Input
          label='Email'
          labelPlacement='inside'
          type='email'
          name='email'
          isInvalid={(error?.email != null)}
          errorMessage={error?.email}
        />
      </div>
      <div>
        <Input
          label='Password'
          labelPlacement='inside'
          type='password'
          name='password'
          isInvalid={(error?.password != null)}
          errorMessage={error?.password}
        />
      </div>

      {/* // Todo: hacer que desaparezca el mensaje de error despues de 5 segundos */}
      {
        (message !== '') && (
          <div className='col-span-2 justify-center'>
            <span className='text-danger-400'>{message}</span>
          </div>
        )
      }

      <div className='col-span-2 flex justify-center'>
        <SubmitButton />
      </div>
    </form>
  )
}
