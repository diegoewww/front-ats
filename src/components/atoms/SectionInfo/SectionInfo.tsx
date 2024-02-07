'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { motion } from 'framer-motion'

const SectionInfo = () => {
  return (
    <section className='relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center'>
      <div className='flex gap-20'>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex flex-col gap-6 justify-center items-center max-w-[220px]'
        >
          <Image
            alt='Card background'
            src='/mejorar-perfil-desktop.b9672760.png'
            priority
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex flex-col gap-6 justify-center items-center max-w-[220px]'
        >
          Hola
        </motion.div>

      </div>
    </section>
  )
}

export default SectionInfo
