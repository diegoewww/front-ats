// import { getOffer } from '@/service/offers'
import getUser from '@/service/supabase/authServer/getUser'
import DetailOffers from './DetailOffers'
import { getOfferIdSupabase } from '@/service/supabase/offersSupabase'
import type { offer } from '@/service/types/databaseExtensionSupabbase'

interface Props {
  params: { id: string }
}

export default async function OfertaDescription ({ params }: Props) {
  const { userType } = await getUser()
  const { id } = params
  // const offer = await getOffer(id) //JSonBIN
  const { offer, error } = await getOfferIdSupabase(id)// Supabase

  if (error != null) {
    return <div>Error: {error.message}</div>
  }

  if (offer == null) {
    return <div>Loading...</div>
  }

  const oferta = offer[0] as offer

  return (
    <DetailOffers offer={oferta} userType={userType} />
  )
}
