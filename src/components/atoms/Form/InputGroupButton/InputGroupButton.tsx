'use client'

import useCustomController, { UseControllerPropsCustom } from '@/hooks/useCustomController'
// import { SelectButton } from 'primereact/selectbutton'
// import { CheckboxGroup, Checkbox } from '@nextui-org/checkbox'
import { RadioGroup, Radio } from '@nextui-org/radio'
import ErrorMessageForm from '../ErrorMessageForm/ErrorMessageForm'

interface inputGroupButton extends UseControllerPropsCustom {
  title: string
  options: string[]
}

export default function InputGroupButton (props: inputGroupButton) {
  const {
    field,
    errors
  } = useCustomController(props)

  const { title, options } = props

  return (
    <div className='grid gap-2'>
      <p>{title} <span className='text-red-300'>*</span></p>
      <div className='grid'>
        {/* <SelectButton options={options} {...field} /> */}
        {/* <CheckboxGroup value={field.value as string[]} onChange={(value) => field.onChange(value)} orientation='horizontal'>
          {options.map((option) => (
            <Checkbox key={option} value={option}>
              {option}
            </Checkbox>
          ))}
        </CheckboxGroup> */}
        <RadioGroup value={field.value as string} onChange={(value) => field.onChange(value)} orientation='horizontal'>
          {options.map((option) => (
            <Radio key={option} value={option}>
              {option}
            </Radio>
          ))}
        </RadioGroup>
        <ErrorMessageForm name={field.name} errors={errors} />
      </div>
    </div>
  )
}
