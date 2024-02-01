import CrearOferta from './form-Oferta-client'
import { defaultValues } from './const/defaulValuesForm'
import { getTempateId } from '@/service/offers'
import { getLevelExperience, getArea, getCountry, getModality, getSkills, getStudies, getLanguages, getTypeOfContract, getWorkingHours, getSubArea, getCurrency } from '@/service/quarkus/offersQuarkus'

async function fetchOfferFields () {
  const { areaPuesto } = await getArea()
  const { country } = await getCountry()
  const { experience } = await getLevelExperience()
  const { skills } = await getSkills()
  const { studies } = await getStudies()
  const { languages } = await getLanguages()
  const { modality } = await getModality()
  const { contract } = await getTypeOfContract()
  const { workinghours } = await getWorkingHours()
  const { subarea } = await getSubArea()
  const { currency } = await getCurrency()
  return { areaPuesto, country, experience, skills, studies, languages, modality, contract, workinghours, subarea, currency }
}

export default async function CrearOfertaPage ({ params }: { params: { id: string | undefined } }) {
  let defaultValuesData: any = defaultValues
  const data = await fetchOfferFields()

  if (params.id !== undefined) {
    const template = await getTempateId(params.id)
    defaultValuesData = {
      ...defaultValuesData,
      ...template
    }
  }
  return (
    <>
      <CrearOferta defaultValuesData={defaultValuesData} offerData={data} />
    </>
  )
}
