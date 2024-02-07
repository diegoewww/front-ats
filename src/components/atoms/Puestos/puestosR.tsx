'use client'
import { motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/tooltip'
import Marquee from '../Marquee/Marquee'
import { Button } from '@nextui-org/button'

export default function Puestos() {
  return (
    <section className='relative max-w-screen-xl mx-auto gap-12 md:px-8 flex flex-col  '>
      <div className='relative flex flex-col w-full overflow-hidden  '>
        <Marquee pauseOnHover className='[--duration:40s] pb-3 mt-4'>
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Analista Sistemas </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Desarrollador Web </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text'
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Ingeniero en Redes </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Digital Project Manager </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Analista de datos </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Analista Junior </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Científico de datos </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'>  Ciberseguridad </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'>  Inteligencia Artificial </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text'
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Backend Dev </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
        </Marquee>
      </div>
    </section>
  )
}
