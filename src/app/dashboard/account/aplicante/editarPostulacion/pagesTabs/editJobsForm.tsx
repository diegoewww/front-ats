'use client'

import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Select, SelectItem } from '@nextui-org/select'
import { Checkbox } from '@nextui-org/checkbox'
import { useState } from 'react'

export default function FormEditJobs () {
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    actividadEmpresa: '',
    nombrePuesto: '',
    nivelExperiencia: '',
    areaPuesto: '',
    fechaInicio: '',
    fechaFin: '' as string | null,
    detallesAdicionales: ''
  })

  const actividadesEmpresa = ['Ventas', 'Tecnología', 'Administración', 'Servicios']
  const nivelesExperiencia = ['Principiante', 'Intermedio', 'Avanzado', 'Experto']
  const areasPuesto = ['Marketing', 'Desarrollo', 'Recursos Humanos', 'Operaciones']

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
          aria-label='Nombre de la empresa'
          label='Nombre de la empresa'
          labelPlacement='inside'
          variant='bordered'
          onChange={(e) => handleInputChange(e, 'nombreEmpresa')}
        />
      </div>
      <div className='col-span-1'>
        <Select
          aria-label='Actividad de la empresa'
          placeholder='Actividad de la empresa'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
            handleSelectChange(value, 'actividadEmpresa')
          }}
        >
          {actividadesEmpresa.map((actividad, index) => (
            <SelectItem key={index} value={actividad}>
              {actividad}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='col-span-1'>
        <Input
          aria-label='Nombre del puesto'
          label='Nombre del puesto'
          labelPlacement='inside'
          variant='bordered'
          onChange={(e) => handleInputChange(e, 'nombrePuesto')}
        />
      </div>
      <div className='col-span-1'>
        <Select
          aria-label='Nivel de experiencia'
          placeholder='Nivel de experiencia'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
            handleSelectChange(value, 'nivelExperiencia')
          }}
        >
          {nivelesExperiencia.map((nivel, index) => (
            <SelectItem key={index} value={nivel}>
              {nivel}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className='col-span-2'>
        <Select
          aria-label='Área del puesto'
          placeholder='Área del puesto'
          className='w-full'
          variant='bordered'
          onChange={(value) => {
            handleSelectChange(value, 'areaPuesto')
          }}
        >
          {areasPuesto.map((puesto, index) => (
            <SelectItem key={index} value={puesto}>
              {puesto}
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
            Trabajando actualmente
          </Checkbox>
        </div>
      </div>
      <div className='col-span-2'>
        <Textarea
          aria-label='Más detalles sobre el puesto'
          label='Más detalles sobre el puesto'
          labelPlacement='inside'
          onChange={(e) => handleInputChange(e, 'detallesAdicionales')}
        />
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
