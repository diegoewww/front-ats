'use client'
import { motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/tooltip'
import Marquee from '../Marquee/Marquee'

export default function Partners () {
  return (
    <section className='max-w-screen-md mx-auto px-4 py-24 gap-12 md:px-8 flex flex-col justify-center items-center '>
      <motion.h2
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text'
      >
        Estas empresas necesitan tu talento
      </motion.h2>
      <div className='relative flex flex-col w-full overflow-hidden gap-y-4 '>
        <Marquee reverse pauseOnHover className='[--duration:40s]'>
          <Tooltip content='NextJs'>
            <motion.img
              initial={{ y: 5, opacity: 0 }}
              whileInView={{
                opacity: 1
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              src='https://images.computrabajo.com/2023/11/07/logosPE/adecco-162x88b.png'
              className=' text-foreground/80'
            />
          </Tooltip>
          <Tooltip content='NextUI'>
            <motion.img
              initial={{ y: 5, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              src='https://images.computrabajo.com/2023/11/07/logosPE/mass-162x88b.png'
              className=' text-foreground/80'
            />
          </Tooltip>
          <Tooltip content='JavaScript'>
            <motion.img
              initial={{ y: 5, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              src='https://images.computrabajo.com/2023/11/07/logosPE/NGR-162x88.png'
              className='text-foreground/80'
            />
          </Tooltip>
          <Tooltip content='TailwindCSS'>
            <motion.img
              initial={{ y: 5, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              src='https://images.computrabajo.com/2023/11/07/logosPE/pandero-162x88.png'
              className='text-foreground/80'
            />
          </Tooltip>
          <Tooltip content='ReactJS'>
            <motion.img
              initial={{ y: 5, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              src='https://images.computrabajo.com/2023/11/07/logosPE/farmaciasperuanas-162x88.png'
              className='text-foreground/80'
            />
          </Tooltip>
          <Tooltip content='Framer Motion'>
            <motion.img
              initial={{ y: 5, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2 }}
              src='https://images.computrabajo.com/2023/11/07/logosPE/mapfre-162x88.png'
              className='text-foreground/80'
            />
          </Tooltip>
        </Marquee>

      </div>
    </section>
  )
}
