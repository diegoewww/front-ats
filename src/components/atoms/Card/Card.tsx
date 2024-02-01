import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import Image from 'next/image' // Importa el componente Image si no lo has hecho

const CardUI = () => {
  return (
    <div className='max-w-[2024px] gap-2 grid grid-cols-2 grid-rows-0 px-8'>
      <Card className='sm:col-span-1 h-[80px] relative overflow-hidden'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Profecional</p>
          <h4 className='text-white font-semibold text-large'>Jóvenes Profecionales</h4>
        </CardHeader>
        <Image
          layout='fill'
          objectFit='cover'
          alt='Card background'
          className='z-0'
          src='/jovenes-profesionales.89b68ed3.webp'
        />
        <div className='absolute inset-0 flex justify-end items-end p-4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 12l14 0' /><path d='M13 18l6 -6' /><path d='M13 6l6 6' /></svg>
        </div>
      </Card>
      <Card className='sm:col-span-1 h-[80px] relative overflow-hidden'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Empresa</p>
          <h4 className='text-white font-semibold text-large'>Puestos ejecutivos y directivos</h4>
        </CardHeader>
        <Image
          layout='fill'
          objectFit='cover'
          alt='Card background'
          className='z-0'
          src='/puestos-ejecutivos.93b35b21.webp'
        />
        <div className='absolute inset-0 flex justify-end items-end p-4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 12l14 0' /><path d='M13 18l6 -6' /><path d='M13 6l6 6' /></svg>
        </div>
      </Card>
    </div>

  )
}

export default CardUI
