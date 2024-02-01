'use client'

import { ScrollPanel } from 'primereact/scrollpanel'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function ScrollPanelAtom ({ children, className = 'h-[60vh] w-full' }: Props) {
  return (
    <ScrollPanel className={className}>
      {children}
    </ScrollPanel>
  )
}
