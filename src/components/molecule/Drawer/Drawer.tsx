'use client'
import { useToggleOpenDrawer } from '@/hooks/useOpenDrawer'
import { useAppSelector } from '@/hooks/useStore'
import { Button } from '@nextui-org/button'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

interface DrawerProps {
  header: React.ReactNode
  children: React.ReactNode
}

export default function DrawerR ({ header, children }: DrawerProps) {
  const { toggleOpenToDrawer } = useToggleOpenDrawer()

  const isOpen = useAppSelector((state) => state.openDrawer.isOpen)

  const toggleDrawer = () => {
    toggleOpenToDrawer()
  }

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={500}
        className='p-drawer'
      >
        <article className='relative max-w-lg p-5 flex flex-col space-y-6 h-full '>
          <header className='flex justify-between items-center'>
            <h1 className='font-bold text-xl'>{header}</h1>
            <Button isIconOnly variant='light' onPress={toggleDrawer}><i className='pi pi-times' /></Button>
          </header>
          {children}
        </article>
      </Drawer>
    </>
  )
}
