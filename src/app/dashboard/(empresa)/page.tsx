import TableAtom from '@/components/atoms/Table/Table'
import getUser from '@/service/supabase/authServer/getUser'
import { getTemplate } from '@/service/offers'
import { getOffersRecruiter } from '@/service/supabase/offersSupabase'
// import { redirect } from 'next/navigation'
// import { getOffersSupabase } from '@/service/offersSupabase'

export default async function Dashboard () {
  const { user } = await getUser()
  // if (user === null) redirect('/loginUser')
  const templates = await getTemplate()
  // const offersRecluter = await getOffersReclutadorSupabase(user?.id as string)
  const offerReclutador = await getOffersRecruiter(user?.id as string)

  console.log(offerReclutador)
  console.log(user?.id as string)

  return (
    <article className='grid gap-3'>

      <TableAtom templates={templates} offersRecluter={offerReclutador.offers ?? []} />
      {/* <pre>
        {JSON.stringify(offersRecluter, null, 2)}
      </pre> */}
    </article>
  )
}
