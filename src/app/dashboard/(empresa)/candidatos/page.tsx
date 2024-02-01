import { getAllPostulantesSupabase } from '@/service/supabase/offersSupabase'
import FilterBar from './filterBar'
import Candidatos from './ShowCandidatos'
import { Postulante } from './mocks'

export default async function PageCandidatos () {
  const { postulantes } = await getAllPostulantesSupabase()
  const postulantesData: Postulante[] = (postulantes != null)
    ? postulantes.map((item: Postulante) => ({
      avatar_url: item.avatar_url,
      dni: item.dni,
      id: item.id,
      last_name: item.last_name,
      name: item.name,
      phone: item.phone,
      summary: item.summary
    }))
    : []
  return (
    <>
      <FilterBar />
      <article>
        <Candidatos postulantes={postulantesData} />
      </article>
    </>
  )
}
