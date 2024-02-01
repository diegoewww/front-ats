'use client'

import { useToggleOpenDrawer } from '@/hooks/useOpenDrawer'
import { Button } from '@nextui-org/button'
import { usePathname, useRouter } from 'next/navigation'

interface ButtonDrawerProps {
  apliId?: string
  aplicanteId: string
}

export default function ButtonDrawer ({ apliId, aplicanteId }: ButtonDrawerProps) {
  const { toggleOpenToDrawer } = useToggleOpenDrawer()
  const pathname = usePathname()
  const router = useRouter()

  function handleButton () {
    toggleOpenToDrawer()

    router.push(`${pathname}?apliId=${aplicanteId}`)
  }
  return <Button type='button' radius='md' size='sm' color='secondary' onClick={handleButton}>Ver Detalles</Button>
}
