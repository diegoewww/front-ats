'use client'

import { Toast } from 'primereact/toast'
import { RefObject } from 'react'

export default function ToastAtom ({ toast }: { toast: RefObject<Toast> }) {
  return (
    <Toast ref={toast} />
  )
}
