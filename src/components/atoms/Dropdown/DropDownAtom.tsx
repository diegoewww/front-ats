// 'use client'

// import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { Select, SelectItem } from '@nextui-org/select'
import { ChangeEvent } from 'react'

export interface Options {
  name: string
  code: string
}

interface Props {
  options: Options[]
  placeholder: string
  selectedCity: Options | null
  selectedCityTemplate: (e: ChangeEvent<HTMLSelectElement>) => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  name?: string
  label?: string
  labelPlacement?: 'inside' | 'outside' | 'outside-left'
}

export default function DropDownAtom ({ options, placeholder, selectedCity, selectedCityTemplate, className, size, name, label, labelPlacement }: Props) {
  return (
    // <Dropdown
    //   value={selectedCity} onChange={selectedCityTemplate} options={options} optionLabel='name'
    //   showClear placeholder={placeholder} className={className}
    // />
    <Select
      value={selectedCity?.name}
      onChange={selectedCityTemplate}
      placeholder={placeholder}
      className={className}
      size={size}
      name={name}
      label={label}
      labelPlacement={labelPlacement}
    >
      {options.map((option) => (
        <SelectItem key={option.code} value={option.name}>
          {option.name}
        </SelectItem>
      ))}
    </Select>
  )
}
