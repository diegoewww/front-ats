'use client'

import FormEditJobs from './pagesTabs/editJobsForm'
import FormEditStudies from './pagesTabs/editStudiesForm'
import FormAddCV from './pagesTabs/addCVForm'
import { Tabs, Tab } from '@nextui-org/tabs'

export default function TabsPostulacion () {
  return (
    <div className='w-full'>
      <Tabs aria-label='Options'>
        <Tab key='experienciaLaboral' title='Experiencia Laboral'>
          <h1 className='text-2xl font-bold mt-8 mb-4'>Experiencia laboral</h1>
          <p className='mb-4'>Añadir experiencia laboral</p>
          <FormEditJobs />
        </Tab>
        <Tab key='formacionAcademica' title='Formación Académica'>
          <h1 className='text-2xl font-bold mt-8 mb-4'>Formación académica</h1>
          <p className='mb-4'>Añadir formación académica</p>
          <FormEditStudies />
        </Tab>
        <Tab key='addCV' title='Añadir CV'>
          <h1 className='text-2xl font-bold mt-8 mb-4'>Agregar CV</h1>
          <FormAddCV />
        </Tab>
      </Tabs>
    </div>
  )
}
