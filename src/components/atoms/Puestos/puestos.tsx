'use client'
import { motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/tooltip'
import Marquee from '../Marquee/Marquee'
import { Button } from '@nextui-org/button'

export default function Puestos() {
  return (
    <section className='relative max-w-screen-xl mx-auto gap-12 md:px-8 flex flex-col  '>
      <div className='relative flex flex-col w-full overflow-hidden  '>
        <Marquee reverse pauseOnHover className='[--duration:40s] pb-3'>
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Scrum Master </Button>
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
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Frontend Dev </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> FullStack Dev </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
          <motion.div
            initial={{ y: 5, opacity: 0 }}
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
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> QA </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>
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
            initial={{ y: 5, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text '
          >
            {/* Aquí colocarías el contenido de tus botones */}
            <Button size='lg' radius='lg' variant='bordered'> Administrador de sistemas </Button>
            {/* Puedes añadir más botones según sea necesario */}
          </motion.div>

        </Marquee>
      </div>
    </section>
  )
}
