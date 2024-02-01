import { getOfferIdSupabase } from '@/service/supabase/offersSupabase'
import { Chip } from '@nextui-org/chip'

interface Props {
  idOffer: string
}

export default async function OfferTittle ({ idOffer }: Props) {
  const { offer, error: errorOffer } = await getOfferIdSupabase(idOffer)
  if (errorOffer !== null) return <div>{JSON.stringify(errorOffer, null, 2)}</div>
  if (offer === null) return <div>loading...</div>
  return (
    <section>
      {
        offer.map((offer) => (
          <article key={offer.id} className='grid gap-2 py-5'>
            <h1 className='capitalize text-4xl font-bold'>{offer.tittle}</h1>
            <div className='flex items-center gap-2'>
              <Chip size='md' radius='sm' variant='dot' color='primary'>{offer.puesto?.label}</Chip>
              <Chip size='md' radius='sm' variant='dot' color='secondary'>{offer.modalidad}</Chip>
              <Chip size='md' radius='sm' variant='dot' color='warning'>{offer.ubicacion?.label}</Chip>
            </div>
          </article>
        ))
      }
    </section>
  )
}
