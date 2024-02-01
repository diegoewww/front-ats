'use client'

import { ValidationCrearOfertaSchema, ValidationCrearOfertaSchemaOptional } from '@/schemas/crearOferta.schema'
import { UseControllerProps, useController, useFormContext } from 'react-hook-form'

export type UseControllerPropsCustom = UseControllerProps<ValidationCrearOfertaSchema | ValidationCrearOfertaSchemaOptional>
// export type keyUseControllerPropsCustom = keyof ValidationCrearOfertaSchema
// Definir una interfaz para el objeto de errores con claves de tipo string

const useCustomController = (props: UseControllerPropsCustom) => {
  const { control } = useFormContext()

  const {
    field,
    formState: { errors },
    fieldState: { error }
  } = useController({ ...props, ...control })

  // Puedes agregar cualquier lógica adicional aquí si es necesario

  return {
    field,
    errors,
    error
  }
}

export default useCustomController
