// * Interfaces para templates de JSONBin

export interface JSONBin {
  record: Offer[]
}

export interface JSONBinTemplate {
  record: Template[]
}

export interface Offer {
  id: string
  tittle: string
  contrato: string
  nivelExp: string
  jornada: string
  modalidad: string
  puesto: Puesto
  ubicacion: Ubicacion
  sueldo: number[]
  description: string
  ageExp: AgeExp
  conocimientos: Conocimientos
  estudios: Estudios
  idiomas: Idiomas
}

export interface labelOpions {
  id: string
  label: string
  value: string
}
export interface Puesto extends labelOpions {}

export interface Ubicacion extends labelOpions {}

export interface AgeExp extends labelOpions {}

export interface Conocimientos extends labelOpions {}

export interface Estudios extends labelOpions {}

export interface Idiomas extends labelOpions {}

// ? TEMPLATE INTERFACE

export interface Template extends Partial<Offer> {
  id: string
  nameTemplate?: string
}
