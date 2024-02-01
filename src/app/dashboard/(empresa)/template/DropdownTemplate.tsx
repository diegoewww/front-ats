/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { VerticalDotsIcon } from '../../../../../public/svgComponent'
import { removeTemplateID } from '@/service/offers'
import { useRouter } from 'next/navigation'

interface Props {
  id: string
}

export default function DropdownTemplate ({ id }: Props) {
  const router = useRouter()

  const handleDeleteTemplate = async () => {
    await removeTemplateID(id)
    router.refresh()
  }

  const handleEditTemplate = () => {
    router.push(`/dashboard/template/createTemplate/${id}`)
  }
  return (
    <Dropdown
      placement='bottom-start'
      classNames={{
        base: 'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
        arrow: 'bg-default-200'
      }}
    >
      <DropdownTrigger>
        <Button
          color='primary'
          variant='flat'
          isIconOnly
        >
          <VerticalDotsIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem onPress={handleEditTemplate}>
          <div className='flex items-center gap-2'>
            <i className='pi pi-file-edit' /> Editar
          </div>
        </DropdownItem>
        <DropdownItem onPress={handleDeleteTemplate} className='text-danger'>
          <div className='flex items-center gap-2'>
            <i className='pi pi-trash' />
            Eliminar
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
