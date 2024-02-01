'use client'

import useCustomController, { UseControllerPropsCustom } from '@/hooks/useCustomController'
// import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber'
import { Input } from '@nextui-org/input'
import { Slider } from '@nextui-org/slider'
// import { Slider, SliderChangeEvent } from 'primereact/slider'
import ErrorMessageForm from '../ErrorMessageForm/ErrorMessageForm'

interface inputRangeSlider extends UseControllerPropsCustom {
  min?: number
  max?: number
}

export default function InputRangeSlider (props: inputRangeSlider) {
  const {
    field,
    errors
  } = useCustomController(props)

  const { min = 100, max = 2000 } = props

  return (
    <div className='grid gap-2'>
      <p>Sueldo</p>
      <div className='grid grid-cols-2 gap-4'>
        {/* <InputNumber
          value={(field.value as number[])[0] ?? 0} onValueChange={(e: InputNumberValueChangeEvent) => {
            field.onChange([e.value, (field.value as number[])[1]])
          }} min={min} max={max}
          placeholder='Min'
        /> */}
        <Input
          value={(field.value as number[])[0]?.toString() ?? 0} onValueChange={(e: string) => {
            const newValue = parseFloat(e)
            field.onChange([newValue, (field.value as number[])[1]])
          }} min={min} max={max}
          placeholder='Min'
          size='sm'
        />
        {/* <InputNumber
          value={(field.value as number[])[1]} onValueChange={(e: InputNumberValueChangeEvent) => {
            field.onChange([(field.value as number[])[0], e.value])
          }} min={min} max={max}

        /> */}
        <Input
          value={(field.value as number[])[1]?.toString()} onValueChange={(e: string) => {
            const newValue = parseFloat(e)
            field.onChange([newValue, (field.value as number[])[0], e])
          }} min={min} max={max}
          placeholder='Max'
          size='sm'
        />
      </div>
      {/* <Slider
        {...field}
        min={min}
        max={max}
        value={field.value as [number, number]}
        onChange={(e: SliderChangeEvent) => {
          field.onChange(e.value)
        }}
        className='w-full'
        range
      /> */}
      <Slider
        {...field}
        minValue={min}
        maxValue={max}
        value={field.value as [number, number]}
        onChange={(e: number | number[]) => {
          field.onChange(e)
        }}
        className='w-full'
      />
      <ErrorMessageForm name={field.name} errors={errors} />
    </div>
  )
}
