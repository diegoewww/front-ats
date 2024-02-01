/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { InputAutoComplete, InputTextForm } from '@/components/atoms/Form'
import { Language, Skills, Study, WorkingHours } from '@/service/types/databaseExtensionSupabbase'

interface Step4Props {
  offerData: {
    skills: Skills[]
    studies: Study[]
    languages: Language[]
    workinghours: WorkingHours[]
  }
}

interface item {
  id: string
  label: string
  value: number
}

export default function Step4 ({ offerData }: Step4Props) {
  const skills: item[] = offerData.skills.map((skill: Skills) => ({
    id: skill.id,
    label: skill.description,
    value: parseInt(skill.id)
  }))

  const studies: item[] = offerData.studies.map((study: Study) => ({
    id: study.id,
    label: study.description,
    value: parseInt(study.id)
  }))

  const languages: item[] = offerData.languages.map((language: Language) => ({
    id: language.id,
    label: language.description,
    value: parseInt(language.id)
  }))

  const workinghours: item[] = offerData.workinghours.map((hour: WorkingHours) => ({
    id: hour.id,
    label: hour.description,
    value: parseInt(hour.id)
  }))

  return (
    <div className='grid gap-8'>
      <h1>Requerimientos</h1>
      <div className='grid grid-cols-2 gap-4'>
        <InputTextForm
          title='Años de experiencia'
          name='ageExp'
          placeholder='Ej. 5'
          type='number'
        />
        <InputAutoComplete
          title='Horas de trabajo'
          itemsSelect={workinghours}
          name='workinghours'
          placeholder='Ej. 300'
        />
      </div>

      <InputAutoComplete
        title='Habilidades y conocimientos'
        itemsSelect={skills}
        name='conocimientos'
        placeholder='Ej. Angular'
      />

      <InputAutoComplete
        title='Estudios mínimos'
        itemsSelect={studies}
        name='estudios'
        placeholder='Ej. Educación Secundaria'
      />

      <InputAutoComplete
        title='Idiomas'
        itemsSelect={languages}
        name='idiomas'
        placeholder='Ej. English'
      />

      <div className='grid grid-cols-2 gap-4'>
        <InputTextForm
          title='Edad mínima'
          name='ageMin'
          placeholder='18'
          type='number'
        />
        <InputTextForm
          title='Edad máxima'
          name='ageMax'
          placeholder='50'
          type='number'
        />
      </div>

    </div>
  )
}
