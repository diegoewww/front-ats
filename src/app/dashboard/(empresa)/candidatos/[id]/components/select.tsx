'use client'

import { Select, SelectItem } from '@nextui-org/select'
import { useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export const orders = [
  { label: 'Reciente', value: 'false', description: 'Candidatos recientes' },
  { label: 'Antiguos', value: 'true', description: 'Candidatos antiguos' }
]
export default function SelectComponent () {
  const [, setValue] = useState<string>('')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueEvent = e.target.value
    const params = new URLSearchParams(searchParams)
    if (valueEvent === null || valueEvent === '') {
      params.delete('order')
    } else {
      params.set('order', valueEvent)
    }
    replace(`${pathname}?${params.toString()}`)
    setValue(valueEvent)
  }

  return (

    <Select
      label='Ordenar por fecha'
      className='max-w-xs'
      size='sm'
      variant='bordered'
      onChange={handleSelectionChange}
      defaultSelectedKeys={['false']}
    >
      {orders.map((order) => (
        <SelectItem key={order.value} value={order.value}>
          {order.label}
        </SelectItem>
      ))}
    </Select>

  )
}
