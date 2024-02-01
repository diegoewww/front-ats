import { Kanit, Mali, Comfortaa } from 'next/font/google'

export const mali = Mali({
  weight: '700',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-mali'
})

export const comfortaa = Comfortaa({
  weight: '700',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-comfortaa'
})

export const kanit = Kanit({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-kanit'
})
