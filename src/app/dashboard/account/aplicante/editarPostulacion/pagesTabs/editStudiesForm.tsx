'use client'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Select, SelectItem } from '@nextui-org/select'
import { Checkbox } from '@nextui-org/checkbox'
import { useState } from 'react'

export default function FormEditStudies () {
  const [formData, setFormData] = useState({
    tituloCarrera: '',
    nivelEstudio: '',
    areaEstudio: '',
    institucion: '',
    estado: '',
    fechaInicio: '',
    fechaFin: '' as string | null
  })

  const nivelesEstudio = ['Bachillerato', 'Licenciatura', 'Maestría', 'Doctorado']
  const areasEstudio = ['Ciencias', 'Arte', 'Tecnología', 'Literatura']
  const estados = ['En curso', 'Completado', 'Suspendido']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setFormData({ ...formData, [fieldName]: e.target.value })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, fieldName: string) => {
    const selectedValue = e.target.value
    setFormData({ ...formData, [fieldName]: selectedValue })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    setFormData(prevData => ({
      ...prevData,
      fechaFin: isChecked ? null : ''
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <form className='grid grid-cols-2 gap-8 w-full max-w-4xl mx-auto' onSubmit={handleSubmit}>
      <div className='col-span-1'>
        <Input
          aria-label='Título o carrera'
          label='Título o carrera'
          labelPlacement='inside'
          variant='bordered'
          onChange={(e) => handleInputChange(e, 'tituloCarrera')}
        />
      </div>
      <div className='col-span-1'>
        <Select
          aria-label='Nivel de estudio'
          placeholder='Nivel de estudio'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
            handleSelectChange(value, 'nivelEstudio')
          }}
        >
          {nivelesEstudio.map((nivel, index) => (
            <SelectItem key={index} value={nivel}>
              {nivel}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='col-span-1'>
        <Select
          aria-label='Área de estudio'
          placeholder='Área de estudio'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
            handleSelectChange(value, 'areaEstudio')
          }}
        >
          {areasEstudio.map((area, index) => (
            <SelectItem key={index} value={area}>
              {area}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Institución'
          label='Institución'
          labelPlacement='inside'
          variant='bordered'
          onChange={(e) => handleInputChange(e, 'institucion')}
        />
      </div>
      <div className='col-span-2'>
        <Select
          aria-label='Estado'
          placeholder='Estado'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
            handleSelectChange(value, 'estado')
          }}
        >
          {estados.map((estado, index) => (
            <SelectItem key={index} value={estado}>
              {estado}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Fecha de inicio'
          label='Fecha de inicio'
          labelPlacement='inside'
          placeholder='mm/dd/aaaa'
          type='date'
          variant='bordered'
          onChange={(e) => handleInputChange(e, 'fechaInicio')}
        />
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Fecha de fin'
          label='Fecha de fin'
          labelPlacement='inside'
          placeholder='mm/dd/aaaa'
          type='date'
          variant='bordered'
          onChange={(e) => handleInputChange(e, 'fechaFin')}
          disabled={formData.fechaFin === null}
        />
        <div>
          <Checkbox onChange={handleCheckboxChange}>
            Estudiando actualmente
          </Checkbox>
        </div>
      </div>
      {/* Submit button */}
      <div className='col-span-2 flex'>
        <Button type='submit' className='col-span-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
          Guardar
        </Button>
      </div>
    </form>
  )
}
