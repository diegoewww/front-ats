'use client'

import { Badge } from '@nextui-org/badge'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover'

export default function PopoverNotification () {
  return (
    <Popover
      placement='bottom' showArrow backdrop='opaque' classNames={{
        base: 'py-3 px-4 border border-default-200 bg-gradient-to-br from-white to-default-300 dark:from-default-100 dark:to-default-50',
        arrow: 'bg-default-200'
      }}
    >
      <Badge content='99' shape='circle' color='danger'>
        <PopoverTrigger>
          <Button
            radius='full'
            isIconOnly
            color='default'
            variant='light'
          >
            <i className='pi pi-bell' />
          </Button>
        </PopoverTrigger>
      </Badge>
      <PopoverContent>
        <div className='max-w-[300px] border-none bg-transparent grid gap-3'>
          <p className='text-base'>
            Notificaciones
            <span aria-label='confetti' role='img'>
              🎉
            </span>
          </p>
          <img src='https://www.bumeran.com.pe/candidate/static/media/no-notifications.d346bee7.svg' alt='' />
          <p className='text-small text-default-500 text-center'>
            No Tienes Notificaciones Nuevas
          </p>
        </div>
        <Divider className='my-2' />
      </PopoverContent>
    </Popover>
  )
}
