'use client'

import { getSupabase } from '@/hooks/supabase/useSupabase'
import { Oferta, type InsertPostulacion } from '../types/databaseExtensionSupabbase'

// ? Obtener el cliente de Supabase
const supabase = getSupabase()

const url = 'http://localhost:8080/api'

// ? Obtener el area de puesto
/**
 * Recupera todos los datos de la tabla "puesto" en Supabase.
 * @returns Un objeto que contiene los datos de "areaPuesto" y cualquier error potencial.
 */
export const getAreaPuesto = async () => {
  const { data: areaPuesto, error } = await supabase.from('puesto').select('*')
  return {
    areaPuesto,
    error
  }
}

// ? Obtener la ubicacion
/**
 * Recupera todos los datos de la tabla "ubicacion" en Supabase.
 * @returns Un objeto que contiene los datos de "ubicacion" recuperados y cualquier error encontrado durante el proceso de recuperación.
 */
export const getUbicacion = async () => {
  const { data: ubicacion, error } = await supabase.from('ubicacion').select('*')
  return {
    ubicacion,
    error
  }
}

// ? Obtener el año de experiencia
/**
 * Obtiene los datos de la tabla ageExp.
 * @returns Un objeto que contiene los datos de la tabla ageExp y un posible error.
 */
export const getAgeExp = async () => {
  const { data: ageExp, error } = await supabase.from('ageExp').select('*')
  return {
    ageExp,
    error
  }
}

// ? Obtener los conocimientos
/**
 * Recupera todos los conocimientos de la tabla 'conocimientos'.
 * @returns Un objeto que contiene los conocimientos recuperados y cualquier error que ocurra durante el proceso.
 */
export const getConocimientos = async () => {
  const { data: conocimientos, error } = await supabase.from('conocimientos').select('*')
  return {
    conocimientos,
    error
  }
}

// ? Obtener los estudios
/**
 * Recupera todos los estudios de la tabla 'estudios' en Supabase.
 * @returns Un objeto que contiene los estudios recuperados y cualquier error que ocurra durante la recuperación.
 */
export const getEstudios = async () => {
  const { data: estudios, error } = await supabase.from('estudios').select('*')
  return {
    estudios,
    error
  }
}

// ? Obtener los idiomas
/**
 * Recupera todos los idiomas de la tabla 'idiomas' en Supabase.
 * @returns Un objeto que contiene el array de idiomas y cualquier error que haya ocurrido durante la recuperación.
 */
export const getIdiomas = async () => {
  const { data: idiomas, error } = await supabase.from('idiomas').select('*')
  return {
    idiomas,
    error
  }
}

// ? Create Postulacion
/**
 * Crea una nueva postulación en la base de datos.
 * @param postulaciones Los datos de la postulación a insertar.
 * @returns Un objeto con la postulación creada y un posible error.
 */
export const createPostulacion = async (postulaciones: InsertPostulacion) => {
  const { data: postulacion, error } = await supabase.from('postulaciones').insert([postulaciones]).select()
  return {
    postulacion,
    error
  }
}

// ? Crear una nueva oferta usando el API de Quarkus
/**
 *
 * @param offer Un objeto que contiene la información de la oferta a crear
 * @returns resultado de la consulta.
 */
export const createOffer = async (offer: Oferta) => {
  const res = await fetch(url + '/offers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(offer)
  })
  const oferta = await res.json()
  return {
    oferta
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
