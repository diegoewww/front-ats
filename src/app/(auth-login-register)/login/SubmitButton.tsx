'use client'

import { Button } from '@nextui-org/button'
import { useFormStatus } from 'react-dom'

export function SubmitButton () {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit' className='col-span-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300
      font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      isLoading={pending}
    >
      Sign in
    </Button>
  )
}
