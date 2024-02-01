import { Slider } from '@nextui-org/slider'

interface inputSliderProps {
  step: number
  min: number
  max: number
  defaultValue?: number
  label?: string
  className?: string
  name?: string
  showSteps?: boolean
}

export default function InputSlider ({ step, min, max, defaultValue, label, className, name, showSteps }: inputSliderProps) {
  return (
    <Slider
      label={label}
      step={step}
      maxValue={max}
      minValue={min}
      defaultValue={defaultValue}
      className={className}
      name={name}
      showSteps={showSteps}
    />
  )
}
