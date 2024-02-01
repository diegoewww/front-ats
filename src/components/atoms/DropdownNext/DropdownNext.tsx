'use client'
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem
// } from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'
// import Link from 'next/link'
import { MenuItem } from 'primereact/menuitem'
import { useRef } from 'react'
import { TieredMenu } from 'primereact/tieredmenu'
import { Template } from '@/service/types/interface'

export default function DropDownAtomNext ({ templates }: { templates: Template[] }) {
  const menu = useRef(null)
  const templatesItem: MenuItem[] = templates.reverse().slice(templates.length - 6, templates.length + 1).reverse().map((template) => {
    return {
      label: template.nameTemplate,
      style: { width: '190px' },
      className: 'capitalize',
      url: `/dashboard/editOferta/${template.id}`
    }
  })
  const itemsMenu: MenuItem[] = [
    {
      label: 'Crear Oferta',
      icon: 'pi pi-plus',
      url: '/dashboard/crearOferta'
    },
    {
      separator: true
    },
    {
      label: 'Crear Desde Template',
      icon: 'pi pi-fw pi-file',
      url: '/dashboard/template/createTemplate',
      items: [...templatesItem, { separator: true }, { label: 'Ver mas Templates', icon: 'pi pi-folder-open', url: '/template' }]
    }
  ]

  return (
    <div className='card flex justify-content-center'>
      <TieredMenu model={itemsMenu} popup ref={menu} breakpoint='900px' />
      {/* @ts-expect-error */}
      <Button onClick={(e) => menu.current.toggle(e)}>
        Crear Aviso
      </Button>
    </div>
  )
}
