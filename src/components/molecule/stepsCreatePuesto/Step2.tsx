/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { InputAutoComplete, InputRangeSlider } from '@/components/atoms/Form'
import { Area, Country, Currency, SubArea } from '@/service/types/databaseExtensionSupabbase'

interface Step2Props {
  offerData: {
    areaPuesto: Area[]
    subarea: SubArea[]
    country: Country[]
    currency: Currency[]
  }
}

interface item {
  id: string
  label: string
  value: number
}

export default function Step2 ({ offerData }: Step2Props) {
  const areas: item[] = offerData.areaPuesto.map((area: Area) => ({
    id: area.id,
    label: area.description,
    value: parseInt(area.id)
  }))

  const countries: item[] = offerData.country.map((country: Country) => ({
    id: country.id,
    label: country.description,
    value: parseInt(country.id)
  }))

  const subareas: item[] = offerData.subarea.map((subarea: SubArea) => ({
    id: subarea.id,
    label: subarea.description,
    value: parseInt(subarea.id)
  }))

  const currencies: item[] = offerData.currency.map((currency: Currency) => ({
    id: currency.id,
    label: currency.description,
    value: parseInt(currency.id)
  }))

  return (
    <div className='grid gap-8'>
      <InputAutoComplete
        title='Area del puesto'
        itemsSelect={areas}
        name='puesto'
        placeholder='Ej. Tecnología'
      />

      <InputAutoComplete
        title='Sub Area del puesto'
        itemsSelect={subareas}
        name='subarea'
        placeholder='Ej. Desarrollo de Software'
      />

      <InputAutoComplete
        title='¿Dónde le gustaría anunciar este empleo?'
        itemsSelect={countries}
        name='ubicacion'
        placeholder='Ej. Perú'
      />

      {/* Aquí ira el inputAutoComplete para Location */}

      <InputRangeSlider
        name='sueldo'
      />

      <InputAutoComplete
        title='Tipo de moneda'
        itemsSelect={currencies}
        name='currency'
        placeholder='Ej. Nuevo Sol'
      />
    </div>
  )
}
