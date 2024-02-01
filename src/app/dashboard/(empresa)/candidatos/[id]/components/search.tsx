'use client'

import { Input } from '@nextui-org/input'
import { SearchIcon } from '../../../../../../../public/svgComponent'
import { Button } from '@nextui-org/button'
import { FormEvent, useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function Search ({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [search, setSearch] = useState('')

  function handleSearch (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (search !== '') {
      params.set('search', search)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <form className='flex w-full sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]' onSubmit={handleSearch}>
      <Input
        placeholder={placeholder}
        size='sm'
        radius='none'
        variant='bordered'
        type='search'
        classNames={{
          inputWrapper: ['rounded-l-lg']
        }}
        startContent={<SearchIcon />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button radius='none' className='rounded-r-lg' type='submit' size='lg'>Buscar</Button>
    </form>
  )
}
