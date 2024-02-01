// import { Oferta } from '../types/databaseExtensionSupabbase'
import { supabaseServerComponent as supabase } from './Instance/supabaseServerComponent'

const selectAllOffers = `
*,
puesto(*),
ubicacion(*),
ageExp(*),
conocimientos(*),
estudios(*),
idiomas(*)
`

const postulaciones = `
*,
trabajo(*)
`

const url = 'http://localhost:8080/api'

// const selectAllPostulantes = `
// *,
// last_name(*),
// dni(*),
// phone(*),
// summary(*),
// name(*),
// avatar_url(*)
// `

// ? OBTENER OFERTAS DE TRABAJO
// Todo:(falta recuperar estas ofertas con paginacion y asi no traer todas las ofertas)

/**
 * Obtiene todas las ofertas desde la tabla 'ofertas' en Supabase.
 * @returns Un objeto con las ofertas y un posible error.
 */
export const getOffersSupabase = async () => {
  const { data: offers, error } = await supabase.from('trabajo').select(selectAllOffers)
  return {
    offers,
    error
  }
}

// ? Obtener Offers desde el API
/**
 * Obtiene todas las ofertas desde recruitment.offer.
 * @returns Un objeto que contiene las ofertas en json.
 */
export const getAllOffers = async () => {
  const res = await fetch(url + '/', { method: 'GET' })
  const offers = await res.json()
  return {
    offers
  }
}

// ? OBTENER TODOS LOS POSTULANTES DE LA BASE DE DATOS
/**
 * Obtiene todos los postulantes desde la tabla 'aplicante' en Supabase.
 * @returns Un objeto con los postulantes y un posible error.
 */
export const getAllPostulantesSupabase = async () => {
  const { data: postulantes, error } = await supabase.from('aplicante').select()
  return {
    postulantes,
    error
  }
}

// ? OBTENER OFERTA POR ID
/**
 * Obtiene una oferta de la tabla 'ofertas' en Supabase según su ID.
 * @param id El ID de la oferta a obtener.
 * @returns Un objeto con la oferta y un posible error.
 */
export const getOfferIdSupabase = async (id: string) => {
  const { data: offer, error } = await supabase
    .from('trabajo')
    .select(selectAllOffers)
    .eq('id', id)
  return { offer, error }
}

// ? Obtener offer por id desde el API
/**
 * Obtiene una oferta desde recruitment.offer
 * @param id El ID de la oferta a obtener
 * @returns Un objeto conformado por la oferta en json.
 */
export const getOfferByID = async (id: string) => {
  const res = await fetch(url + `/offers/${id}`, { method: 'GET' })
  const offer = await res.json()
  return {
    offer
  }
}

// ? POSTULACIONES DEL USUARIO
/**
 * Obtiene las postulaciones de un usuario desde la tabla 'postulaciones' en Supabase.
 * @param idUsuario El ID del usuario cuyas postulaciones se quieren obtener.
 * @returns Un objeto con las postulaciones obtenidas y un posible error.
 */
export const getPostulacionesSupabase = async (idUsuario: string) => {
  const { data: offers, error } = await supabase.from('postulaciones').select(postulaciones).eq('aplicante_id', idUsuario)
  return {
    offers,
    error
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

// ? OBTENER NUMERO DE CANDIDATOS POR OFERTA
/**
 * Obtiene el número de candidatos que se postularon a una oferta específica.
 * @param idOferta El ID de la oferta.
 * @returns Un objeto con la cantidad de candidatos y un posible error.
 */
export const getNumCandidatos = async (idOferta: string) => {
  const { count, error } = await supabase.from('postulaciones').select('*', { count: 'exact', head: true }).eq('trabajo_id', idOferta)
  return {
    count,
    error
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

// ? OBTENER OFERTAS DEL RECLUTADOR(USUARIO) QUE HA CREADO
// interface para mapear los datos de la tabla ofertas
export interface OfferRecluterTable {
  id: string
  name: string
  tittle: string
  status: string
  avatar: string
  email: string
  candidatos: number
}

/**
 * Obtiene las ofertas de un reclutador desde Supabase.
 * @param idUsuario El id del usuario reclutador.
 * @returns Un objeto con las ofertas y un posible error.
 */
export const getOffersReclutadorSupabase = async (idUsuario: string) => {
  const selectOffersReclutador = `
  id,
  tittle,
  reclutador(name, empresa(company_name, company_avatar_url))
  `
  const { data, error } = await supabase.from('trabajo').select(selectOffersReclutador).eq('recruiter_id', idUsuario)
  // mapear data a OfferRecluterTable
  const offers = await Promise.all<OfferRecluterTable>((data ?? []).map(async (offer) => {
    const { count } = await getNumCandidatos(offer.id)
    const candidatos = count ?? 0
    return {
      id: offer.id,
      name: offer.reclutador?.name as string,
      tittle: offer.tittle,
      status: 'active',
      avatar: offer.reclutador?.empresa?.company_avatar_url as string,
      email: offer.reclutador?.empresa?.company_name as string,
      candidatos: candidatos ?? 0
    }
  }))
  // console.log(offers)
  return {
    offers,
    error
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

// ? Obtener datos de un reclutador
export const getRecruiter = async (idRec: string) => {
  const selectRecruiterInfo = `
  name,
  empresa(company_name, company_avatar_url)
  `
  const { data, error } = await supabase.from('reclutador').select(selectRecruiterInfo).eq('id', idRec)
  return {
    data,
    error
  }
}

// ? OBTENER DATOS DEL UN APLICANTE
export const getAplicante = async (idAplicante: string) => {
  const { data, error } = await supabase.from('aplicante').select('*').eq('id', idAplicante)
  return {
    data,
    error
  }
}

// ? OBTENER DATOS DEL DE LOS CANDIDATOS DE UNA OFERTA
// Campos y tablas a seleccionar de la tabla postulaciones
const selectCandidatesFromOffer = `
*,
aplicante_id,
aplicante(*),
trabajo(tittle)
`

/**
 * Obtiene los datos de los candidatos que se postularon a una oferta en particular.
 * @param idReclutier El id del reclutador que publicó la oferta.
 * @param idOferta El id de la oferta.
 * @param searchUsers (Opcional) El nombre del usuario a buscar.
 * @param orderByDesc (Opcional) Indica si se deben ordenar los resultados de forma descendente. Por defecto es true.
 * @returns Un objeto con los datos y el error (si existe).
 */
export const getDataCandidatesFromOffer = async (idReclutier: string, idOferta: string, searchUsers?: string, orderByDesc: boolean = true) => {
  let query = supabase.from('postulaciones').select(selectCandidatesFromOffer).eq('trabajo_id', idOferta).eq('trabajo.recruiter_id', idReclutier)

  if (searchUsers !== undefined) {
    query = query.ilike('aplicante.name', `%${searchUsers}%`)
  }
  query = query.order('fecha_postulacion', { ascending: orderByDesc })
  const { data, error } = await query

  return {
    data,
    error
  }
}

// ? Obtener las áreas del puesto desde el API
/**
 * Recupera las áreas disponibles de recruitment.area
 * @returns Un objeto con las áreas en json
 */
export const getArea = async () => {
  const res = await fetch(url + '/areas', { method: 'GET' })
  const areaPuesto = await res.json()
  return {
    areaPuesto
  }
}
// ? Obtener la ubicación (país) desde el API
/**
 * Recupera los países de recruitment.country
 * @returns Un objeto con los países en json
 */
export const getCountry = async () => {
  const res = await fetch(url + '/country', { method: 'GET' })
  const country = await res.json()
  return {
    country
  }
}
// ? Obtener los años de experiencia desde el API
/**
 * Recupera los años de experiencia de recruitment.
 * @returns Un objeto que contiene los años de experiencia en json
 */
export const getAgeExperience = async () => {
  const res = await fetch(url + '/experience', { method: 'GET' })
  const ageExp = await res.json()
  return {
    ageExp
  }
}
// ? Obtener los conocimientos desde el API
/**
 * Recupera los conocimientos de recruitment.
 * @returns Un objeto que contiene los conocimientos recuperados y cualquier error que ocurra durante el proceso.
 */
export const getSkills = async () => {
  const res = await fetch(url + '/skills', { method: 'GET' })
  const skills = await res.json()
  return {
    skills
  }
}
// ? Obtener los estudios desde el API
/**
 * Recupera todos los estudios de la tabla 'estudios' en Supabase.
 * @returns Un objeto que contiene los estudios recuperados en json
 */
export const getStudies = async () => {
  const res = await fetch(url + '/studygrade', { method: 'GET' })
  const studies = res.json()
  return {
    studies
  }
}
// ? Obtener los idiomas desde el API
/**
 * Recupera todos los idiomas desde recruitment.
 * @returns Un objeto que contiene los idiomas en json.
 */
export const getLanguages = async () => {
  const res = await fetch(url + '/languages', { method: 'GET' })
  const languages = await res.json()
  return {
    languages
  }
}
// ? Obtener la modalidad desde el API
/**
 * Recupera los tipos de contrato desde recruitment.
 * @returns Un objeto que contiene los idiomas en json.
 */
export const getModality = async () => {
  const res = await fetch(url + '/modality', { method: 'GET' })
  const modality = await res.json()
  return {
    modality
  }
}
// ? Obtener el tipo de contrato desde el API
/**
 * Recupera los tipos de contrato desde recruitment.
 * @returns Un objeto que contiene los idiomas en json.
 */
export const getTypeOfContract = async () => {
  const res = await fetch(url + '/typeofcontract', { method: 'GET' })
  const contract = await res.json()
  return {
    contract
  }
}
