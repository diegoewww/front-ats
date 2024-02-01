'use client'

import useCustomController, { UseControllerPropsCustom } from '@/hooks/useCustomController'
// import { InputText } from 'primereact/inputtext'
import { Input } from '@nextui-org/input'
import ErrorMessageForm from '../ErrorMessageForm/ErrorMessageForm'
interface inputTextForm extends UseControllerPropsCustom {
  title: string
  placeholder?: string
  type?: string
}

export default function InputTextForm (props: inputTextForm) {
  const {
    field,
    errors
  } = useCustomController(props)
  const { title, placeholder, type } = props

  return (
    <div>
      <p>{title} <span>*</span></p>
      <div className='grid'>
        {/* <InputText
          id='title'
          aria-describedby='title-help'
          placeholder={placeholder}
          value={field.value as string}
          onChange={(e) => field.onChange(e.target.value)}
        />
        <ErrorMessageForm name={field.name} errors={errors} /> */}
        <Input
          id='title'
          aria-describedby='title-help'
          placeholder={placeholder}
          value={field.value as string}
          onChange={(e) => field.onChange(e.target.value)}
          type={type}
        />
        <ErrorMessageForm name={field.name} errors={errors} />
      </div>
    </div>
  )
}
