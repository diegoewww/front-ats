import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
// import Image from 'next/image'

export default function CustomCard ({
  nombre,
  apellidos,
  estudios,
  sueldoPretendido,
  experienciasLaborales,
  imagen
}: {
  nombre: string
  apellidos: string
  estudios: string
  sueldoPretendido: string
  experienciasLaborales: string
  imagen: string
}) {
  const imageProfileStyle = {
    borderRadius: '50%'
  }
  return (
    <Card className='max-w-full'>
      <CardHeader className='flex gap-3'>
        <img
          alt={`${nombre} ${apellidos}`}
          height={60}
          src={imagen}
          width={60}
          style={imageProfileStyle}
        />
        <div className='flex flex-col'>
          <p className='text-md'>{nombre}</p>
          <p className='text-small text-default-500'>{apellidos}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className='text-md'>{estudios}</p>
        <p className='text-small text-default-600'>{`$ ${sueldoPretendido}`}</p>
        <p className='text-small text-default-500 mt-1 mb-1'>{experienciasLaborales}</p>
      </CardBody>
      <CardFooter className='flex gap-5'>
        <Button color='primary'>
          Contactar
        </Button>
        <Button color='primary' variant='bordered'>
          Detalles
        </Button>
      </CardFooter>
    </Card>
  )
}
