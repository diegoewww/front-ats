'use client'
import { motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/tooltip'
import Marquee from '../Marquee/Marquee'

export default function Partners() {
  return (
    <section className='max-w-screen-md mx-auto px-4 py-20 gap-12 md:px-8 flex flex-col justify-center items-center '>
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
      <div className='relative flex flex-col w-full overflow-hidden '>
        <Marquee reverse pauseOnHover className='[--duration:40s]'>
          <Tooltip content='Adidas'>
            <motion.img
              initial={{ y: 5, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              src='https://tendenciascreativas.com.ar/wp-content/uploads/2018/09/Logos-en-blanco-y-negro.jpg'
              className='text-foreground/80'
              style={{ minWidth: '204px', maxHeight: '65px', margin: '0 10px' }}
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
              src='data:image/png;base64,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'
              className=' text-foreground/80'
              style={{ minWidth: '204px', maxHeight: '65px', margin: '0 10px' }}
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
              src='https://logomaster.ai/hs-fs/hubfs/white-logo-jeep.jpg?width=1700&height=1148&name=white-logo-jeep.jpg'
              className='text-foreground/80'
              style={{ minWidth: '204px', maxHeight: '65px', margin: '0 10px' }}
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
              src='https://w7.pngwing.com/pngs/16/39/png-transparent-movistar-full-logo-black-tech-companies.png'
              className='text-foreground/80'
              style={{ minWidth: '204px', maxHeight: '65px', margin: '0 10px' }}
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
              src='data:image/png;base64,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'
              className='text-foreground/80'
              style={{ minWidth: '204px', maxHeight: '65px', margin: '0 10px' }}
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
              src='https://i.pinimg.com/736x/80/05/e0/8005e067ec9901eb20f87caa6b548ac0.jpg'
              className='text-foreground/80'
              style={{ minWidth: '204px', maxHeight: '65px', margin: '0 10px' }}
            />
          </Tooltip>
        </Marquee>

      </div>
    </section>
  )
}
