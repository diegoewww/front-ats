'use client'

import { optionsPuestoEstudio, optionsExperienciaLaboral, optionsIdiomas, optionsLocalizacion } from './mocks'
// import { InputRangeSlider } from '@/components/atoms/Form'
import { ChangeEvent } from 'react'
import DropDownAtom from '@/components/atoms/Dropdown/DropDownAtom'
import { Slider } from '@nextui-org/slider'

export default function FilterBar () {
  const handleCitySelection = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e)
  }
  return (
    <nav className='flex items-center justify-between pb-8 gap-4'>
      <DropDownAtom
        options={optionsPuestoEstudio}
        placeholder='Buscar por puesto o estudio'
        selectedCity={null}
        selectedCityTemplate={handleCitySelection}
        size='sm'
      />
      <DropDownAtom
        options={optionsExperienciaLaboral}
        placeholder='Buscar por experiencia laboral'
        selectedCity={null}
        selectedCityTemplate={handleCitySelection}
        size='sm'
      />
      <DropDownAtom
        options={optionsLocalizacion}
        placeholder='Buscar por Localizacion'
        selectedCity={null}
        selectedCityTemplate={handleCitySelection}
        size='sm'
      />
      <DropDownAtom
        options={optionsIdiomas}
        placeholder='Buscar por Idioma'
        selectedCity={null}
        selectedCityTemplate={handleCitySelection}
        size='sm'
      />
      <Slider
        minValue={200}
        maxValue={20000}
        defaultValue={[500, 1000]}
        size='sm'
      />
    </nav>
  )
}
