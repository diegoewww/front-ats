import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import getUser from '@/service/supabase/authServer/getUser'
import { getApplicationsByUserID } from '@/service/supabase/offersSupabase'
import { Chip } from '@nextui-org/chip'
import { Divider } from '@nextui-org/divider'
import dateFormat from '@/utils/dateFormat'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { typeUser } from '@/service/types/databaseExtensionSupabbase'
// import { useState } from 'react'

export default async function PostulacionesPage () {
  // const [orderBy, setOrderBy] = useState('postulacion')
  const { user, userType } = await getUser()
  if (user === null) return null
  const { id } = user
  // const { offers, error } = await getPostulacionesSupabase(id)
  const { offers } = await getApplicationsByUserID(id)

  // if (error != null) {
  //   return <div>error</div>
  // }

  if (userType === typeUser.empresa) return <div>Esta pagina no esta disponible para los reclutadores y Empresas</div>
  const fechaActual = new Date().toDateString()

  // const handleOrderByChange = (orden: 'postulacion' | 'publicacion') => {
  //   setOrderBy(orden)
  // }

  // const sortOffersByData = (a, b) => {
  //   const dateA = a[orderBy] ? new Date(a[orderBy]) : new Date()
  //   const dateB = b[orderBy] ? new Date(b[orderBy]) : new Date()

  //   return dateB - dateA
  // }

  // const sortedOffers = offers?.slice().sort(sortOffersByData)

  return (
    <div className='grid gap-5'>
      <Card isBlurred shadow='md' className='border-none bg-background/60 dark:bg-default-100/50'>
        <CardHeader className='justify-between p-5'>
          <h1 className='text-2xl text-blue-700 font-bold'>
            <i className='pi pi-check-square text-xl mr-2' />
            Mis Postulaciones
          </h1>

          <div className='flex items-center gap-1'>
            <span className='text-base font-bold'>Ordenar por:</span>
            <Button href='#' color='primary' variant='flat' radius='full' as={Link} size='sm'>
              Fecha de postulacion
            </Button>
            <Button href='#' color='primary' variant='light' radius='full' as={Link} size='sm'>
              Fecha de publicacion
            </Button>

          </div>

        </CardHeader>
      </Card>

      <div className='grid grid-cols-1 2xl:grid-cols-2 gap-5'>
        {
          offers?.length !== undefined && offers?.length > 0
            ? (
              <>
                {offers?.map((offer: any) => {
                  return (

                    <Card key={offer.id} shadow='md' className='border-none bg-background/60 dark:bg-default-100/50'>
                      <CardHeader className='flex justify-between'>
                        <div className='flex gap-3'>
                          <img
                            alt='logo empresa'
                            height={40}
                            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
                            width={40}
                          />
                          <div className='flex flex-col'>
                            <p className='text-md capitalize'>{offer.trabajo?.tittle}</p>
                            <p className='text-xs text-default-500/90'>TISMART</p>
                          </div>
                        </div>

                        <Button href={`/ofertas/${offer.id as string}`} color='warning' variant='faded' startContent={<i className='pi pi-eye' />} as={Link}>
                          Ver publicacion
                        </Button>

                      </CardHeader>
                      <Divider />
                      <CardFooter className='justify-between'>
                        <ElementsFooter description={offer.estado} />
                        <ElementsFooter title='Fecha de publicacion:' description={dateFormat(offer.trabajo?.created_at ?? fechaActual)} icon={<i className='pi pi-calendar text-xs mr-2' />} />
                        <ElementsFooter title='Fecha de postulacion:' description={dateFormat(offer.fecha_postulacion ?? fechaActual)} icon={<i className='pi pi-check-square text-xs mr-2' />} />
                        <ElementsFooter title='Sueldo:' description={`S/ ${offer.sueldoMinimo as number ?? 0} - ${offer.sueldoMaximo as number ?? 0}`} icon={<i className='pi pi-money-bill text-xs mr-2' />} />
                      </CardFooter>
                    </Card>

                  )
                })}
              </>
              )
            : (
              <p className='text-default-500/90 text-lg text-center col-span-2'>Todavia no tienes postulaciones</p>
              )
        }
      </div>
    </div>
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
        {
          title != null
            ? <span className='capitalize'>{description}</span>
            : <Chip startContent={<i className='pi pi-check-circle text-sm mr-1' />} size='sm' radius='md' color='success' variant='flat'> <span className='capitalize'>{description}</span> </Chip>
        }
      </div>
    </div>
  )
}
