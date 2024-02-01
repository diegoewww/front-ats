import * as yup from 'yup'

const validationSchemaObjectInputSelect = yup.object().shape({
  id: yup
    .string()
    .min(0, 'Id requerido')
    .required('Id requerido'),
  label: yup
    .string()
    .min(0, 'Label requerido')
    .required('Label requerido'),
  value: yup
    .number()
    .min(0, 'Value requerido')
    .required('Value requerido')
})

const validationSchemaObjectRangeNumber = yup
  .array()
  .length(2, 'El sueldo debe contener exactamente dos números')
  .of(
    yup
      .number()
      .positive('El sueldo debe ser positivo')
      .min(100, 'El sueldo debe ser mayor o igual a 100')
      .max(2000, 'El sueldo debe ser menor o igual a 1500')
  )

const validationSchemaObjectInputSelectoptional = yup.object().shape({
  id: yup.string(),
  label: yup.string(),
  value: yup.number()
})

export const validationCrearOfertaSchema = [
  // ? Step 1 <---- Datos de la oferta
  yup.object({
    tittle: yup
      .string()
      .min(3, { message: 'Tittle is required' })
      .max(50, { message: 'Tittle is required' })
      .required(),
    contrato: yup.string().min(1, { message: 'contrato requerido' }).required(),
    nivelExp: yup
      .string()
      .min(1, { message: 'nivel de experiencia requerido' })
      .required(),
    // jornada: yup.string().min(1, { message: 'jornada requerido' }).required(),
    modalidad: yup
      .string()
      .min(1, { message: 'modalidad requerido' })
      .required()
  }),

  // ? Step 2 <---- Datos de la oferta II
  yup.object({
    puesto: validationSchemaObjectInputSelect
      .required('selecciona una opción')
      .typeError('Selecciona una opción válida para puesto'),
    subarea: validationSchemaObjectInputSelect
      .required('selecciona una opción requerida')
      .typeError('Selecciona una opción válida para esta Sub Area'),
    ubicacion: validationSchemaObjectInputSelect
      .required('selecciona una opción')
      .typeError('Selecciona una opción válida para ubicación'),
    currency: validationSchemaObjectInputSelect
      .required('selecciona una opción')
      .typeError('Selecciona una opción válida para el tipo de moneda'),
    sueldo: validationSchemaObjectRangeNumber
  }),

  // ? Step 3 <---- Descripción de la oferta
  yup.object({
    description: yup
      .string()
      .min(20, { message: 'escribe 20' })
      .required()
  }),

  // ? Step 4 <---- Requisitos
  yup.object({
    ageExp: yup
      .number()
      .integer('El número de años debe ser un entero')
      .positive('El número de años debe ser mayor que 0')
      .min(0, 'El número de años debe ser mayor que 0')
      .required('Selecciona una opción')
      .typeError('Selecciona una opción válida para los años de experiencia'),
    ageMin: yup
      .number()
      .integer('El número de años debe ser un entero')
      .positive('El número de años debe ser mayor que 0')
      .min(18, 'El número de años debe ser mayor que 18')
      .required('Selecciona una opción')
      .typeError('Selecciona una opción válida para los años de experiencia'),
    ageMax: yup
      .number()
      .integer('El número de años debe ser un entero')
      .positive('El número de años debe ser mayor que 0')
      .min(19, 'El número de años debe ser mayor que 18')
      .max(50, 'El número de años debe ser mayor que 50')
      .required('Selecciona una opción')
      .typeError('Selecciona una opción válida para los años de experiencia'),
    workinghours: validationSchemaObjectInputSelect
      .required('selecciona una opción')
      .typeError('Selecciona una opción válida para horas de trabajo'),
    conocimientos: validationSchemaObjectInputSelect
      .required('selecciona una opción')
      .typeError('Selecciona una opción válida para conocimientos'),
    estudios: validationSchemaObjectInputSelect
      .required('selecciona una opción')
      .typeError('Selecciona una opción válida para estudios'),
    idiomas: validationSchemaObjectInputSelect
      .required('selecciona una opción')
      .typeError('Selecciona una opción válida para idiomas')
  })
]

export const validationCrearOfertaSchemaoptional = [
  // ? Step 1 <---- Datos de la oferta
  yup.object({
    nameTemplate: yup.string().min(3, { message: 'Tittle debe tener al menos 3 caracteres' }).required('Tittle is required'),
    tittle: yup
      .string(),
    contrato: yup
      .string(),
    nivelExp: yup
      .string(),
    // jornada: yup.string(),
    modalidad: yup
      .string()
  }),

  // ? Step 2 <---- Datos de la oferta II
  yup.object({
    puesto: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para puesto'),
    subarea: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para subarea'),
    ubicacion: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para ubicación'),
    sueldo: validationSchemaObjectRangeNumber,
    currency: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para ubicación')
  }),

  // ? Step 3 <---- Descripción de la oferta
  yup.object({
    description: yup
      .string()
  }),

  // ? Step 4 <---- Requisitos
  yup.object({
    ageExp: yup
      .number()
      .typeError('Selecciona una opción válida para los años de experiencia'),
    conocimientos: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para conocimientos'),
    workinghours: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para conocimientos'),
    estudios: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para estudios'),
    idiomas: validationSchemaObjectInputSelectoptional
      .typeError('Selecciona una opción válida para idiomas'),
    ageMin: yup
      .number()
      .typeError('Selecciona una opción válida para los años de experiencia'),
    ageMax: yup
      .number()
      .typeError('Selecciona una opción válida para los años de experiencia')
  })
]

export type ValidationCrearOfertaSchema = yup.InferType<
(typeof validationCrearOfertaSchema)[number]
>

export type ValidationCrearOfertaSchemaOptional = yup.InferType<
(typeof validationCrearOfertaSchemaoptional)[number]
>
