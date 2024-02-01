'use client'

import { Input } from '@nextui-org/input'

export default function FormAddCV () {
  return (
    <form className='grid grid-cols-2 gap-8 w-full max-w-4xl mx-auto'>
      <div className='col-span-2 flex'>
        <Input
          aria-label='Documento'
          type='file'
          variant='bordered'
        />
      </div>
    </form>
  )
}
