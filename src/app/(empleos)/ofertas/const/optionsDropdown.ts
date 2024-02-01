import { Options } from '@/components/atoms/Dropdown/DropDownAtom'

export const fechapublicacion: Options[] = [
  { name: 'Ultimas 24 horas', code: '1' },
  { name: 'Ultimos 3 dias', code: '2' },
  { name: 'Ultimos 7 dias', code: '3' },
  { name: 'Ultimos 14 dias', code: '4' }
]

export const tipoDeEmpleo: Options[] = [
  { name: 'Indeterminado', code: '1' },
  { name: 'Temporal', code: '2' },
  { name: 'Voluntario', code: '3' },
  { name: 'Practicas', code: '4' },
  { name: 'Freelance', code: '5' }
]

export const ubicacion: Options[] = [
  { name: 'Arequipa', code: '1' },
  { name: 'Cusco', code: '2' },
  { name: 'Lima', code: '3' },
  { name: 'Piura', code: '4' },
  { name: 'Tacna', code: '5' }
]

export const tipoDeTrabajo: Options[] = [
  { name: 'Remoto', code: '1' },
  { name: 'Presencial', code: '2' },
  { name: 'Hibrido', code: '3' }
]
