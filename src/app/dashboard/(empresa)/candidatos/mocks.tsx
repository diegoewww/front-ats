export const DATA_SAMPLE_CANDIDATOS = [
  {
    nombre: 'Juan',
    apellidos: 'García',
    estudios: 'Ingeniería Civil',
    sueldoPretendido: '5000',
    experienciasLaborales: '5 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'María',
    apellidos: 'López',
    estudios: 'Medicina',
    sueldoPretendido: '6000',
    experienciasLaborales: '7 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'Pedro',
    apellidos: 'Martínez',
    estudios: 'Derecho',
    sueldoPretendido: '5500',
    experienciasLaborales: '6 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'Sofía',
    apellidos: 'González',
    estudios: 'Arquitectura',
    sueldoPretendido: '7000',
    experienciasLaborales: '8 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'Diego',
    apellidos: 'Pérez',
    estudios: 'Biología',
    sueldoPretendido: '5200',
    experienciasLaborales: '4 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'Laura',
    apellidos: 'Díaz',
    estudios: 'Psicología',
    sueldoPretendido: '4800',
    experienciasLaborales: '3 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'Luis',
    apellidos: 'Torres',
    estudios: 'Ingeniería Civil',
    sueldoPretendido: '5800',
    experienciasLaborales: '5 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'Elena',
    apellidos: 'Martínez',
    estudios: 'Medicina',
    sueldoPretendido: '6300',
    experienciasLaborales: '6 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  },
  {
    nombre: 'Pablo',
    apellidos: 'García',
    estudios: 'Derecho',
    sueldoPretendido: '5400',
    experienciasLaborales: '4 años',
    imagen: 'https://avatars.githubusercontent.com/u/59839881?v=4'
  }
]

export const optionsPuestoEstudio = [
  { name: 'Ingeniería Civil', code: 'IC' },
  { name: 'Medicina', code: 'ME' },
  { name: 'Derecho', code: 'DE' }
  // ... más opciones
]

export const optionsExperienciaLaboral = [
  { name: '0 - 1 año', code: '0-1' },
  { name: '1 - 3 años', code: '1-3' },
  { name: '3 - 5 años', code: '3-5' }
  // ... más opciones
]

export const optionsLocalizacion = [
  { name: 'Ciudad A', code: 'A' },
  { name: 'Ciudad B', code: 'B' },
  { name: 'Ciudad C', code: 'C' }
  // ... más opciones
]

export const optionsIdiomas = [
  { name: 'Inglés', code: 'EN' },
  { name: 'Español', code: 'ES' },
  { name: 'Francés', code: 'FR' }
  // ... más opciones
]

export interface Postulante {
  avatar_url: string
  dni: string
  id: string
  last_name: string
  name: string
  phone: string
  summary: string | null
}
