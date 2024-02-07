import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar'
import { motion } from 'framer-motion'
import React from 'react'

const Testimonios = () => {
  return (
    <section className='relative max-w-screen-xl mx-auto px-2 py-16 gap-10 md:px-8 flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-20'>
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex flex-col gap-3 justify-center items-center'
        >
          <h4 className='text-2xl font-bold sm:text-5xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text'>
            Testimonios
          </h4>
        </motion.div>
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
            <div className='relative max-w-screen-[251px] mx-auto flex flex-col  justify-center items-center gap-5'>
              <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' className='w-20 h-20 text-large flex justify-center mx-auto' />
              <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptas distinctio </p>
            </div>
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
            <div className='relative max-w-screen-[251px] mx-auto flex flex-col  justify-center items-center gap-5'>
              <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' className='w-20 h-20 text-large flex justify-center mx-auto' />
              <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptas distinctio </p>
            </div>
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
            <div className='relative max-w-screen-[251px] mx-auto flex flex-col  justify-center items-center gap-5'>
              <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' className='w-20 h-20 text-large flex justify-center mx-auto' />
              <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptas distinctio </p>
            </div>
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
            <div className='relative max-w-screen-[251px] mx-auto flex flex-col  justify-center items-center gap-5'>
              <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' className='w-20 h-20 text-large flex justify-center mx-auto' />
              <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptas distinctio </p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Testimonios
