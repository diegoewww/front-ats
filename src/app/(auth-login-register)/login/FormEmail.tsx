'use client'

import { useEffect } from 'react'
import { Input } from '@nextui-org/input'
import { signIn } from '@/lib/actions/UserLogin/actions'
import { SubmitButton } from './SubmitButton'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'

const correoLogin = {
  email: 'user01@gmail.com',
  password: 'user01@gmail.com',
  name: 'User 01',
  user_name: 'user01'
}

export default function FormEmail () {
  const [error, formAction] = useFormState(signIn, null)

  useEffect(() => {
    if (error != null)toast.error('No se pudo iniciar sesión, compruebe sus datos')
  }, [error])

  return (
    <form className='space-y-4 md:space-y-6' action={formAction}>
      <div>
        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email</label>
        <Input
          type='email'
          id='email'
          variant='bordered'
          name='email'
          isInvalid={error != null}
          defaultValue={correoLogin.email}
          required
        />
      </div>
      <div>
        <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
        <Input
          type='password'
          id='password'
          variant='bordered'
          name='password'
          isInvalid={error != null}
          defaultValue={correoLogin.password}
          required
        />
      </div>
      <div>
        {error != null && <span className='text-danger-400/70'>{error.message}</span>}
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-start'>
          <div className='flex items-center h-5'>
            <input id='remember' aria-describedby='remember' type='checkbox' className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800' />
          </div>
          <div className='ml-3 text-sm'>
            <label htmlFor='remember' className='text-gray-500 dark:text-gray-300'>Remember me</label>
          </div>
        </div>
        <a href='#' className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'>Forgot password?</a>
      </div>
      <SubmitButton />
    </form>
  )
}
