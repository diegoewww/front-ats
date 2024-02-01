import ButtonDrawer from '@/components/atoms/Drawer/ButtonDrawer'
import getUser from '@/service/supabase/authServer/getUser'
import { getDataCandidatesFromOffer } from '@/service/supabase/offersSupabase'
import dateFormat from '@/utils/dateFormat'
import { Card, CardFooter, CardHeader } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { Divider } from '@nextui-org/divider'

interface Props {
  idOffer: string
  searchUsers?: string
  order?: boolean
  apliId?: string
}

export default async function CardsCandidate ({ idOffer, searchUsers, order, apliId }: Props) {
  const { user } = await getUser()
  if (user === null) return <div>Usuario no logueado</div> // Todo : reemplzar por un redirect

  const { data, error } = await getDataCandidatesFromOffer(user.id, idOffer, searchUsers, order)

  if (error !== null) return <div>{JSON.stringify(error, null, 2)}</div>
  if (data === null) return <div>loading...</div>
  if (data?.length === 0) { return <div>Todavia No hay candidatos para esta Oferta</div> }

  const dataCandidatesSearch = data.filter((candidate) => {
    return candidate.aplicante !== null
  })

  if (dataCandidatesSearch.length === 0) { return <div>No se encontro ningun candidato</div> }
  return (
    <>
      {
      dataCandidatesSearch.map((candidate) => (
        <Card key={candidate.id} isBlurred shadow='sm' className='border-none bg-background/60 dark:bg-default-100/40 max-w-[610px]'>
          <CardHeader className='flex gap-3'>
            <img
              alt='Sebastian Williams'
              loading='lazy'
              decoding='async'
              data-nimg='fill'
              height={70}
              width={70}
              className='object-cover rounded-xl'
              src={candidate.aplicante?.avatar_url}
            />
            <div className='grid h-full'>
              <h2 className='font-semibold text-xl'>
                {candidate.aplicante?.name}
              </h2>
              <h3 className='text-sm text-gray-400 '>Desarrollador Web </h3>
              <h3 className='text-sm text-gray-400 '>Fecha de postulacion: {dateFormat(candidate.fecha_postulacion)}</h3>
            </div>
          </CardHeader>
          <Divider />
          <CardFooter className='border-t-1 border-default-300 dark:border-default-100'>
            <div className='flex flex-grow gap-2 items-center'>
              <div className='flex flex-col'>
                <Chip size='md' radius='sm' variant='dot' color='secondary'>Revisado</Chip>
              </div>
            </div>
            <ButtonDrawer apliId={apliId} aplicanteId={candidate.aplicante_id} />
          </CardFooter>
        </Card>
      ))
    }
    </>
  )
}
