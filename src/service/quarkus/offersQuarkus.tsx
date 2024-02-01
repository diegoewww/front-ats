import { OfferRecluterTable, getRecruiter } from '../supabase/offersSupabase'
import { LevelExperience, Area, Contract, Country, Language, Modality, Offer, Skills, Study, WorkingHours, SubArea, Currency } from '../types/databaseExtensionSupabbase'

const url = process.env.NEXT_PUBLIC_QUARKUS_API_URL ?? ''

// ? Obtener Offers desde el API
/**
 * Obtiene todas las ofertas desde recruitment.offer.
 * @returns Una lista de objetos de tipo Oferta.
 */
export const getAllOffers = async () => {
  const res = await fetch(url + '/offers', { method: 'GET' })
  const offers: Offer[] = await res.json()
  return {
    offers
  }
}
// ? Obtener offer por id desde el API
/**
 * Obtiene una oferta desde recruitment.offer
 * @param id El ID de la oferta a obtener
 * @returns Un objeto de tipo Oferta.
 */
export const getOfferByID = async (id: string) => {
  const res = await fetch(url + `/offers/${id}`, { method: 'GET' })
  const offer: Offer = await res.json()
  return {
    offer
  }
}
// ? Applications del usuario desde el API
/**
 * Obtiene las postulaciones del usuario desde user_management.application
 * @param idUser El id del usuario
 * @returns Un objeto con las postulaciones correspondientes en json.
 */
export const getApplicationsByUserID = async (idUser: string) => {
  const res = await fetch(url + `/applications/user/${idUser}`, { method: 'GET' })
  const offers = await res.json()
  return {
    offers
  }
}
// ? Numero de candidatos por offer desde el API
/**
 * Obtiene el número de candidatos postulado a una oferta.
 * @param idOffer El ID de la oferta
 * @returns Un objeto con l
 */
export const getCountCandidatesByOffer = async (idOffer: string) => {
  const res = await fetch(url + `/applications/offer/${idOffer}`, { method: 'GET' })
  const offers = await res.json()
  const count = offers.length
  return {
    count
  }
}
// ? Obtener ofertas que el reclutador ha creado usando el API y Supabase
/**
 * Obtiene las ofertas creadas por un reclutador en específico.
 * @param idRecruiter El ID del reclutador
 * @returns Un objeto con las ofertas del reclutador
 */
export const getOffersRecruiter = async (idRecruiter: string) => {
  const res = await fetch(url + `/offers/recruiter/${idRecruiter}`, { method: 'GET' })
  const dataOffers = await res.json()

  const offers = await Promise.all<OfferRecluterTable>((dataOffers ?? []).map(async (offer: any) => {
    const { data } = await getRecruiter(idRecruiter)
    const { count } = await getCountCandidatesByOffer(offer.id)
    const candidatos = count ?? 0
    return {
      id: offer.id,
      name: data?.at(0)?.name as string,
      title: offer.position,
      status: 'active',
      avatar: data?.at(0)?.empresa?.company_avatar_url as string,
      email: data?.at(0)?.empresa?.company_name as string,
      candidatos: candidatos ?? 0
    }
  }))
  return {
    offers
  }
}
// ? Obtener las áreas del puesto desde el API
/**
 * Recupera las áreas disponibles de recruitment.area
 * @returns Una lista de objetos de tipo Area.
 */
export const getArea = async () => {
  const res = await fetch(url + '/areas', { method: 'GET' })
  const areaPuesto: Area[] = await res.json()
  return {
    areaPuesto
  }
}
// ? Obtener la ubicación (país) desde el API
/**
 * Recupera los países de recruitment.country
 * @returns Una lista de objetos de tipo Country
 */
export const getCountry = async () => {
  const res = await fetch(url + '/country', { method: 'GET' })
  const country: Country[] = await res.json()
  return {
    country
  }
}
// ? Obtener el nivel de experiencia desde el API
/**
 * Recupera el nivel de experiencia de recruitment.
 * @returns Una lista de objetos de tipo LevelExperience
 */
export const getLevelExperience = async () => {
  const res = await fetch(url + '/experience', { method: 'GET' })
  const experience: LevelExperience[] = await res.json()
  return {
    experience
  }
}
// ? Obtener los conocimientos desde el API
/**
 * Recupera los conocimientos de recruitment.
 * @returns Una lista de objetos de tipo Skills.
 */
export const getSkills = async () => {
  const res = await fetch(url + '/skills', { method: 'GET' })
  const skills: Skills[] = await res.json()
  return {
    skills
  }
}
// ? Obtener los estudios desde el API
/**
 * Recupera todos los estudios de la tabla 'estudios' en Supabase.
 * @returns Una lista de objetos de tipo Studies.
 */
export const getStudies = async () => {
  const res = await fetch(url + '/studygrade', { method: 'GET' })
  const studies: Study[] = await res.json()
  return {
    studies
  }
}
// ? Obtener los idiomas desde el API
/**
 * Recupera todos los idiomas desde recruitment.
 * @returns Una lista de objetos de tipo Language.
 */
export const getLanguages = async () => {
  const res = await fetch(url + '/languages', { method: 'GET' })
  const languages: Language[] = await res.json()
  return {
    languages
  }
}
// ? Obtener la modalidad desde el API
/**
 * Recupera los tipos de contrato desde recruitment.
 * @returns Una lista de objetos de tipo Modality.
 */
export const getModality = async () => {
  const res = await fetch(url + '/modality', { method: 'GET' })
  const modality: Modality[] = await res.json()
  return {
    modality
  }
}
// ? Obtener el tipo de contrato desde el API
/**
 * Recupera los tipos de contrato desde recruitment.
 * @returns Una lista de objetos de tipo Contract.
 */
export const getTypeOfContract = async () => {
  const res = await fetch(url + '/typeofcontract', { method: 'GET' })
  const contract: Contract[] = await res.json()
  return {
    contract
  }
}
// ? Obtener el workinghours desde el API
/**
 * Recupera las horas de trabajo desde recruitment
 * @returns Una lista de objetos de tipo WorkingHours
 */
export const getWorkingHours = async () => {
  const res = await fetch(url + '/workinghours', { method: 'GET' })
  const workinghours: WorkingHours[] = await res.json()
  return {
    workinghours
  }
}
// ? Obtener subarea desde el API
/**
 * Recupera las subareas desde recruitment
 * @returns Una lista de objetos de tipo SubArea
 */
export const getSubArea = async () => {
  const res = await fetch(url + '/subarea', { method: 'GET' })
  const subarea: SubArea[] = await res.json()
  return {
    subarea
  }
}

// TODO: añadir get para location
// ? Obtener currency desde el API
/**
 * Recupera las currency desde recruitment
 * @returns Una lista de objetos de tipo Currency
 */
export const getCurrency = async () => {
  const res = await fetch(url + '/currency', { method: 'GET' })
  const currency: Currency[] = await res.json()
  return {
    currency
  }
}
