'use client'

import { Toast } from 'primereact/toast'
import { useRef } from 'react'

interface Props {
  color?: 'info' | 'success' | 'warn' | 'error'
  summary?: string
  message: string
}
const useToast = ({ color = 'info', summary = 'Info', message }: Props) => {
  const toast = useRef<Toast>(null)

  const show = () => {
    toast.current?.show({ severity: color, summary, detail: message })
  }

  return {
    toast,
    show
  }
}
export default useToast
