import { Database } from './database'

export type InsertPostulacion = Database['public']['Tables']['postulaciones']['Insert']
export type offerType = Database['public']['Tables']['trabajo']['Row']
export type puestoType = Database['public']['Tables']['puesto']['Row']
export type ubicacionType = Database['public']['Tables']['ubicacion']['Row']
export type ageExpType = Database['public']['Tables']['ageExp']['Row']
export type conocimientosType = Database['public']['Tables']['conocimientos']['Row']
export type estudiosType = Database['public']['Tables']['estudios']['Row']
export type idiomasType = Database['public']['Tables']['idiomas']['Row']

export type offer = offerType & {
  puesto: puestoType
  ubicacion: ubicacionType
  ageExp: ageExpType
  conocimientos: conocimientosType
  estudios: estudiosType
  idiomas: idiomasType
}

export interface Offer {
  id?: string
  recruiter: {
    id: string
    provider: string
    isForm: boolean
    form: boolean
  }
  position: string
  typoOfContract: Contract
  levelOfExperience: LevelExperience
  workingHours: WorkingHours
  modality: Modality
  area: Area
  subArea: SubArea
  country: Country
  location: {
    id: number
    country: Country | null
    description: string
  }
  sueldoMinimo: number
  sueldoMaximo: number
  currency: Currency
  description: string
  yearsOfExp: number
  skills: Skills[]
  minAge: number
  maxAge: number
  minStudyGrade: Study
  languages: Language[]
}

export interface Area {
  id: string
  description: string
}

export interface Country {
  id: string
  description: string
}

export interface LevelExperience {
  id: string
  description: string
}

export interface Skills {
  id: string
  description: string
}

export interface Study {
  id: string
  description: string
}

export interface Language {
  id: string
  description: string
}

export interface Modality {
  id: string
  description: string
}

export interface Contract {
  id: string
  description: string
}

export interface WorkingHours {
  id: string
  description: string
}

export interface Location {
  id: string
  description: string
}

export interface Currency {
  id: string
  description: string
}

export interface SubArea {
  id: string
  area: Area
  description: string
}

export interface user {
  name: string
  lastName: string
  phone: number
  dni: number
  avatar_url?: string
}

export interface Oferta {
  id?: number
  recruiter: {
    id: string
    provider: string
    form: boolean
  }
  position: string
  typoOfContract: {
    id: number
    description: string
  }
  levelOfExperience: {
    id: number
    description: string
  }
  workingHours: {
    id: number
    description: string
  }
  modality: {
    id: number
    description: string
  }
  area: {
    id: number
    description: string
  }
  subArea: {
    id: number
    area: {
      id: number
      description: string
    }
    description: string
  }
  country: {
    id: number
    description: string
  }
  location: {
    id: number
    country: string | null
    description: string
  }
  sueldoMinimo: number
  sueldoMaximo: number
  currency: {
    id: number
    description: string
  }
  description: string
  yearsOfExp: number
  skills: Array<{
    id: number
    description: string
  }>
  minAge: number
  maxAge: number
  minStudyGrade: {
    id: number
    description: string
  }
  languages: Array<{
    id: number
    description: string
  }>
}

export interface empresa {
  nameRecruiter: string
  companyName: string
  companyAddress: string
}

export enum typeUser {
  aplicante = 'aplicante',
  empresa = 'empresa',
}
