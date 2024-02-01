import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@nextui-org/card'

const SectionInfo = () => {
  return (
    <div className='flex flex-col lg:flex-row pt-20'>
      <div className='w-full lg:w-1/2 lg:pr-10'>
        <Image
          alt='Card background'
          src='/mejorar-perfil-desktop.b9672760.webp'
          layout='responsive'
          width={500}
          height={500}
        />
      </div>
      <Card className='bg-transparent lg:w-1/2' isBlurred={false}>
        <CardHeader className='flex flex-col lg:text-left'>
          <div className='flex flex-col items-start'>
            <p className='text-5xl pt-14 text-left pb-6'>Mejora tu perfil profesional</p>
            <p className='text-xl text-default-500 text-left'>Te dejamos algunas recomendaciones para que te destaques a la hora de postularte:</p>
          </div>
        </CardHeader>

        <CardBody>
          <div className='flex flex-col pr-10 pt-6'>
            <div className='flex flex-row pb-10'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-pencil' width='37' height='37' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M13.5 6.5l4 4' /></svg>
              <p className='text-sm pl-5'>Completa tu perfil: tómate el tiempo necesario para completar cada campo de manera clara y brindar información de valor sobre tu perfil.</p>
            </div>
            <div className='flex flex-row pb-10'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-clock-check' width='37' height='37' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M20.942 13.021a9 9 0 1 0 -9.407 7.967' /><path d='M12 7v5l3 3' /><path d='M15 19l2 2l4 -4' /></svg>
              <p className='text-sm pl-5'>Mantén tu información actualizada: si cambiaste de empleo o tus datos de contacto, ¡regístralo! Para los empleadores es esencial que tu perfil esté al día.</p>
            </div>
            <div className='flex flex-row pb-10'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-bolt' width='37' height='37' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11' /></svg>
              <p className='text-sm pl-5'>Suma tus conocimientos y habilidades: además de tus experiencias y estudios, agrega tanto tus conocimientos técnicos como tus cualidades relacionadas al desempeño de tu trabajo.</p>
            </div>
            <div className='flex flex-row '>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-rocket' width='37' height='37' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3' /><path d='M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3' /><path d='M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /></svg>
              <p className='text-sm pl-5'>Realiza el test de personalidad: a través de él podrás identificar de forma gratuita tus talentos y virtudes, y mostrárselos a las empresas.</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default SectionInfo
