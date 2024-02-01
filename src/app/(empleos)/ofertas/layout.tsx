// import { getOffers } from '@/service/offers'
import LayoutOfertas from './ofertas-layout'
import LayoutContainer from '@/components/organism/layouts/LayoutContainer'
import { getAllOffers, getCountry, getModality, getTypeOfContract } from '@/service/supabase/offersSupabase'
import type { Contract, Country, Modality, Oferta } from '@/service/types/databaseExtensionSupabbase'

export default async function OfertasLayout ({ children }: { children: React.ReactNode }) {
  // const dataOffers = await getOffers()
  // const { offers, error } = await getOffersSupabase()
  const { offers } = await getAllOffers()
  const { country } = await getCountry()
  const { modality } = await getModality()
  const { contract } = await getTypeOfContract()

  const ofertas: Oferta[] = offers.map((ofertaJson: any) => {
    return {
      id: ofertaJson.id,
      recruiter: {
        id: ofertaJson.recruiter.id,
        provider: ofertaJson.recruiter.provider,
        form: ofertaJson.recruiter.form
      },
      position: ofertaJson.position,
      typoOfContract: {
        id: ofertaJson.typoOfContract.id,
        description: ofertaJson.typoOfContract.description
      },
      levelOfExperience: {
        id: ofertaJson.levelOfExperience.id,
        description: ofertaJson.levelOfExperience.description
      },
      workingHours: {
        id: ofertaJson.workingHours.id,
        description: ofertaJson.workingHours.description
      },
      modality: {
        id: ofertaJson.modality.id,
        description: ofertaJson.modality.description
      },
      area: {
        id: ofertaJson.area.id,
        description: ofertaJson.area.description
      },
      subArea: {
        id: ofertaJson.subArea.id,
        area: {
          id: ofertaJson.subArea.area.id,
          description: ofertaJson.subArea.area.description
        },
        description: ofertaJson.subArea.description
      },
      country: {
        id: ofertaJson.country.id,
        description: ofertaJson.country.description
      },
      location: {
        id: ofertaJson.location.id,
        country: ofertaJson.location.country,
        description: ofertaJson.location.description
      },
      sueldoMinimo: ofertaJson.sueldoMinimo,
      sueldoMaximo: ofertaJson.sueldoMaximo,
      currency: {
        id: ofertaJson.currency.id,
        description: ofertaJson.currency.description
      },
      description: ofertaJson.description,
      yearsOfExp: ofertaJson.yearsOfExp,
      skills: ofertaJson.skills.map((skill: any) => ({
        id: skill.id,
        description: skill.description
      })),
      minAge: ofertaJson.minAge,
      maxAge: ofertaJson.maxAge,
      minStudyGrade: {
        id: ofertaJson.minStudyGrade.id,
        description: ofertaJson.minStudyGrade.description
      },
      languages: ofertaJson.languages.map((language: any) => ({
        id: language.id,
        description: language.description
      }))
    }
  })

  const countries: Country[] = country.map((pais: any) => {
    return {
      id: pais.id as string ?? '',
      description: pais.description as string ?? ''
    }
  })

  const modalities: Modality[] = modality.map((modalidad: any) => {
    return {
      id: modalidad.id as string ?? '',
      description: modalidad.description as string ?? ''
    }
  })

  const contracts: Contract[] = contract.map((contrato: any) => {
    return {
      id: contrato.id as string ?? '',
      description: contrato.description as string ?? ''
    }
  })

  // console.log(ofertas)
  // console.log(countries)
  // console.log(modalities)
  // console.log(contracts)

  // if (error != null) {
  //   return <div>Error: {error.message}</div>
  // }

  if (offers == null) {
    return <div>Loading...</div>
  }

  // const dataOffers = offers as offer[]

  return (
    <LayoutContainer>
      <LayoutOfertas dataOffers={ofertas} dataCountries={countries} dataModalities={modalities} dataContracts={contracts}>
        {children}
      </LayoutOfertas>
    </LayoutContainer>
  )
}
