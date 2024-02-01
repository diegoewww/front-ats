'use client'
import { InputGroupButton, InputTextForm } from '@/components/atoms/Form'
import { LevelExperience, Contract, Modality } from '@/service/types/databaseExtensionSupabbase'

interface Step1Props {
  offerData: {
    contract: Contract[]
    experience: LevelExperience[]
    modality: Modality[]
  }
}

export default function Step1 ({ offerData }: Step1Props) {
  return (
    <div className='grid gap-8'>
      <InputTextForm
        title='Nombre del Template'
        name='nameTemplate'
        placeholder='Ej: Oferta para Desarrollador web'
      />
      <InputTextForm
        title='Titulo del puesto'
        name='tittle'
        placeholder='Ej: Enfermeria, Arquitecto'
      />
      <InputGroupButton
        title='Que tipo de contratacion ofreces?'
        options={offerData.contract.map((c) => c.description)}
        name='contrato'
      />
      <InputGroupButton
        title='Nivel de experiencia minimo'
        options={offerData.experience.map((c) => c.description)}
        name='nivelExp'
      />
      <InputGroupButton
        title='Modalidad de trabajo'
        options={offerData.modality.map((c) => c.description)}
        name='modalidad'
      />
    </div>
  )
}
