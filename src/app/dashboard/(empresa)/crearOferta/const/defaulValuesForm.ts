import { ValidationCrearOfertaSchema, ValidationCrearOfertaSchemaOptional } from '@/schemas/crearOferta.schema'

export const defaultValues: ValidationCrearOfertaSchema = {
  tittle: '',
  contrato: '',
  nivelExp: '',
  jornada: '',
  modalidad: '',
  puesto: {
    id: '',
    label: '',
    value: 0
  },
  ubicacion: {
    id: '',
    label: '',
    value: 0
  },
  sueldo: [800, 1000],
  description: '',
  ageExp: {
    id: '',
    label: '',
    value: 0
  },
  conocimientos: {
    id: '',
    label: '',
    value: 0
  },
  estudios: {
    id: '',
    label: '',
    value: 0
  },
  idiomas: {
    id: '',
    label: '',
    value: 0
  }
}

export const defaultValuesOptional: ValidationCrearOfertaSchemaOptional = {
  nameTemplate: '',
  ...defaultValues
}
