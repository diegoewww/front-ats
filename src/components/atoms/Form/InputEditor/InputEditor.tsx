'use client'

import useCustomController, { UseControllerPropsCustom } from '@/hooks/useCustomController'
import { Editor, EditorTextChangeEvent } from 'primereact/editor'
import { SetStateAction } from 'react'
import ErrorMessageForm from '../ErrorMessageForm/ErrorMessageForm'

export default function InputEditor (props: UseControllerPropsCustom) {
  const {
    field,
    errors
  } = useCustomController(props)

  return (
    <div>
      <p>Descripcion de la oferta *</p>
      <div className='h-80'>
        <Editor value={field.value as string} onTextChange={(e: EditorTextChangeEvent) => field.onChange(e.htmlValue as SetStateAction<string>)} className='h-64' />
      </div>
      <ErrorMessageForm name={field.name} errors={errors} />
    </div>
  )
}
