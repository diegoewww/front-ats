'use client'
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { Button, ButtonGroup } from '@nextui-org/button'
import { motion } from 'framer-motion'

const Beneficios = () => {
  return (
    <section className='relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center'>
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
        <h4 className='text-3xl font-bold sm:text-5xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text'>
          Beneficios
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
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none'
          >
            <Image
              alt='Woman listing to music'
              className='object-cover'
              height={260}
              width={250}
            />
            <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <p className='text-sm text-white/80'>Available soon.</p>
            </CardFooter>
          </Card>
          <p className='text-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In pariatur ipsam, reiciendis</p>
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
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none'
          >
            <Image
              alt='Woman listing to music'
              className='object-cover'
              height={260}
              width={250}
            />
            <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <p className='text-sm text-white/80'>Available soon.</p>
            </CardFooter>
          </Card>
          <p className='text-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In pariatur ipsam, reiciendis</p>
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
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none'
          >
            <Image
              alt='Woman listing to music'
              className='object-cover'
              height={260}
              width={250}
            />
            <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <p className='text-sm text-white/80'>Available soon.</p>
            </CardFooter>
          </Card>
          <p className='text-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In pariatur ipsam, reiciendis</p>
        </motion.div>
      </div>
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
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none'
          >
            <Image
              alt='Woman listing to music'
              className='object-cover'
              height={260}
              width={250}
            />
            <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <p className='text-sm text-white/80'>Available soon.</p>
            </CardFooter>
          </Card>
          <p className='text-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In pariatur ipsam, reiciendis</p>
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
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none'
          >
            <Image
              alt='Woman listing to music'
              className='object-cover'
              height={260}
              width={250}
            />
            <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <p className='text-sm text-white/80'>Available soon.</p>
            </CardFooter>
          </Card>
          <p className='text-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In pariatur ipsam, reiciendis</p>
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
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none'
          >
            <Image
              alt='Woman listing to music'
              className='object-cover'
              height={260}
              width={250}
            />
            <CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
              <p className='text-sm text-white/80'>Available soon.</p>
            </CardFooter>
          </Card>
          <p className='text-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In pariatur ipsam, reiciendis</p>
        </motion.div>
      </div>

    </section>
  )
}

export default Beneficios
