import React from 'react'
import { getAplicante } from '@/service/supabase/offersSupabase'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import CardExpLaboral from './CardExpLaboral'
import { ContactSection } from './ContactSection'
import CardEducation from './CardEducation'
import ChipConocimientos from './ChipsConocimientos'

interface Props {
  apliId: string
}

const dataExpLaboral = [
  {
    id: 1,
    puesto: 'Desarrollador Web',
    tiempo: '1 año',
    fechaInicio: 'Marzo 2019',
    fechaFin: '2020',
    descripcion: 'Proyectos: INTELIGO SAB - INTELIGO CERTIA INTELIGO BANK • Responsable del proceso Research y Benchmark • Se realizó un A8 testing para la validación de los flujos. • Creación de componentes. • Desarrollo de flujos interacitivos.'
  },
  {
    id: 2,
    puesto: 'Lead Movile Developer en JoyIt ',
    tiempo: '3 meses',
    fechaInicio: 'Junio 2019',
    fechaFin: '2020',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 3,
    puesto: 'Desarrollador Web Backend',
    tiempo: '1 año y 3 meses',
    fechaInicio: 'Agosto 2020',
    fechaFin: null,
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  }
]

export default async function DrawerContent ({ apliId }: Props) {
  const { data, error } = await getAplicante(apliId)

  if (error !== null) return <div>Error</div>
  return (
    <ScrollShadow hideScrollBar className='mt-0 !important'>
      {
        data?.map((aplicante) => (
          <div key={aplicante.id}>
            <header className='flex flex-col justify-center items-center gap-5 max-w-full mb-8'>
              <Avatar src={aplicante.avatar_url} className='w-28 h-28 text-large' name={aplicante.name} radius='md' />
              <div className='text-center'>
                <h1 className='text-2xl font-bold max-w-full text-center capitalize'>{aplicante.name} {aplicante.last_name}</h1>
                <p className='text-lg font-bold text-foreground-600/70'>S/1600</p>
              </div>
            </header>
            {/* Section Contact */}
            <section className='flex flex-col gap-2 '>
              <h2 className='text-xl font-semibold capitalize tracking-wider mb-1'>Contact</h2>
              <ContactSection icon={<i className='pi pi-envelope text-teal-600' />} description={`${aplicante.name}@gmail.com`} />
              <ContactSection icon={<i className='pi pi-whatsapp text-green-600' />} description={aplicante.phone} />
              <ContactSection icon={<i className='pi pi-id-card' />} description={aplicante.dni} />
              <ContactSection icon={<i className='pi pi-map-marker' />} description='Av las retamas lima,peru' />
              <ContactSection icon={<i className='pi pi-calendar' />} description='21/12/1998' />
              <ContactSection icon={<i className='pi pi-link' />} description='archivo adjunto' href='/' isLink />
              <footer className='flex justify-between items-cente gap-10 mt-5'>
                <Button color='primary' className='w-full' radius='sm' variant='ghost' startContent={<i className='pi pi-envelope' />}>Enviar Email</Button>
                <Button color='success' className='w-full' radius='sm' variant='ghost' startContent={<i className='pi pi-whatsapp' />}>Contactar</Button>
              </footer>
            </section>

            <Divider className='my-6 ' />

            {/* Section Experiencia Laboral */}
            <section className='flex flex-col items-center justify-center gap-2'>
              <h2 className='text-xl font-semibold capitalize tracking-wider mb-2 text-start w-full'>Experiencia Laboral</h2>
              {
                dataExpLaboral.map((exp) => (
                  <CardExpLaboral
                    key={exp.id}
                    tiuloPuesto={exp.puesto}
                    tiempo={exp.tiempo}
                    fechaInicio={exp.fechaInicio}
                    fechaFin={exp.fechaFin}
                    descripcion={exp.descripcion}
                  />
                ))
              }
            </section>

            <Divider className='my-6' />

            {/* Section Educacion */}
            <section className='flex flex-col gap-2 '>
              <h2 className='text-xl font-semibold capitalize tracking-wider mb-1'>Educacion</h2>
              <CardEducation
                nonbreCarrera='Ingenieria de Sistemas'
                estado='Cursando'
                institucion='Universidad Nacional de Ingenieria'
                tipoDeEstudio='Pregrado'
                fechaInicio='Agosto 2018'
                fechaFin={null}
              />
            </section>

            <Divider className='my-6' />

            {/* Section Habilidades */}

            <section className='flex flex-col gap-2 '>
              <h2 className='text-xl font-semibold capitalize tracking-wider mb-1'>Conocimientos y Habilidades</h2>
              <div className='flex flex-wrap gap-2 relative'>
                <div className='absolute mx-2 -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-[0.02] blur' />
                <ChipConocimientos />
              </div>
            </section>
          </div>
        ))
      }
    </ScrollShadow>
  )
}
