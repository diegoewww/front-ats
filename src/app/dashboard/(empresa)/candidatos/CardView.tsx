import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Chip } from '@nextui-org/chip'
import { Postulante } from './mocks'

interface CardViewProps {
  postulante: Postulante
}

export default function CardView ({ postulante }: CardViewProps) {
  return (
    <Card key={postulante.id} shadow='md' className='border-none bg-background/60 dark:bg-default-100/50'>
      <CardHeader className='flex justify-between'>
        <div className='flex gap-3'>
          <img alt={postulante.name} height={40} src={postulante.avatar_url} width={40} />
          <div className='flex flex-col'>
            <p className='text-md capitalize'>{postulante.name}</p>
            <p className='text-xs text-default-500/90'>{postulante.last_name}</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <Button color='primary'>
            Contactar
          </Button>
          <Button color='primary' variant='bordered' startContent={<i className='pi pi-eye' />}>
            Detalles
          </Button>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter className='justify-between'>
        {/* Customize or add your desired footer elements */}
        <ElementsFooter title='Estudios:' description='Estudios' icon={<i className='pi pi-calendar text-xs mr-2' />} />
        <ElementsFooter
          title='Experiencias laborales:'
          description='Experiencias laborales'
          icon={<i className='pi pi-check-square text-xs mr-2' />}
        />
        <ElementsFooter title='Sueldo:' description='$ 1500' icon={<i className='pi pi-money-bill text-xs mr-2' />} />
      </CardFooter>
    </Card>
  )
}

function ElementsFooter ({ title, description, icon }: { title?: string, description: string | number, icon?: JSX.Element }) {
  return (
    <div className='flex gap-1'>
      <p className='font-bold text-default-400 text-small'>
        {icon}
        <span className='capitalize'>{title}</span>
      </p>
      <div className='text-default-400 text-small'>
        {title != null ? <span className='capitalize'>{description}</span> : <Chip startContent={<i className='pi pi-check-circle text-sm mr-1' />} size='sm' radius='md' color='success' variant='flat'> <span className='capitalize'>{description}</span> </Chip>}
      </div>
    </div>
  )
}
