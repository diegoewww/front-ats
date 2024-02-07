'use client'

import Faq from '@/components/atoms/Faq/Faq'
import Footer from '@/components/atoms/Footer/Footer'
import InputTextTransparent from '@/components/atoms/InputTextTransparent/InputTextTransparent'
import Partners from '@/components/atoms/Partners/partners'
import Select from '@/components/atoms/Select/Select'
import { Chip } from '@nextui-org/chip'
import { motion } from 'framer-motion'
import SectionInfo from '@/components/atoms/SectionInfo/SectionInfo'
import Puestos from '@/components/atoms/Puestos/puestos'
import PuestosR from '@/components/atoms/Puestos/puestosR'
import Beneficios from '@/components/atoms/Beneficios/Beneficios'
import Testimonios from '@/components/organism/Testimonios/Testimonios'

export default function Home() {
  return (
    <>
      <div className='relative justify-center items-center'>
        <section>
          <div className='max-w-screen-xl mx-auto px-4 pt-28 pb-12 gap-12 md:px-8 flex flex-col justify-center items-center'>
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 0.5 }}
              className='flex flex-col justify-center items-center space-y-5 max-w-3xl mx-auto text-center'
            >
              <Chip
                startContent={
                  <svg
                    className='mx-1'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M4 5h2' />
                    <path d='M5 4v2' />
                    <path d='M11.5 4l-.5 2' />
                    <path d='M18 5h2' />
                    <path d='M19 4v2' />
                    <path d='M15 9l-1 1' />
                    <path d='M18 13l2 -.5' />
                    <path d='M18 19h2' />
                    <path d='M19 18v2' />
                    <path d='M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z' />
                  </svg>
                }
                variant='dot'
                color='default'
              >
                ¡Ahora es el momento de cambiar!
              </Chip>
              <h1 className='text-4xl font-extrabold mx-auto md:text-5xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text'>
                Hay {' '}
                <span className='bg-gradient-to-t from-blue-500 to-foreground text-transparent bg-clip-text border-none'>17,362</span>{' '}
                trabajos esperándote en Perú
              </h1>
              <p className='max-w-2xl mx-auto text-foreground/80'>
                En JoyIt-Ats podrás postular a trabajos exclusivos y cuidadosamente seleccionados en startups y empresas tecnológicas de todo el mundo.
              </p>
              <div className='flex flex-row items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 max-w-[908px]'>
                <form className='flex flex-nowrap gap-0.2'>
                  <InputTextTransparent placeholder='Nombre de empleo' type='text' icon={<i className='pi pi-search ml-5' />} />
                  <Select placeholder='Ubicación' type='text' icon={<i className='pi pi-map-marker ml-5' />} />
                </form>
              </div>
            </motion.div>
          </div>
        </section>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='w-full h-full absolute -top-32 right-24 flex justify-end items-center -z-10'
        >
          <div className='w-3/4 flex justify-center items-center'>
            <div className='w-16 h-[600px] bg-light bg-blue-500 blur-[100px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg]' />
          </div>
        </motion.div>
      </div>
      <Puestos />
      <PuestosR />
      <Partners />
      <Beneficios />
      <Testimonios />
      <SectionInfo />
      {/* <Faq /> */}
      <Footer />
    </>
  )
}
