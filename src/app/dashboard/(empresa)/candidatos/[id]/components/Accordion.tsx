'use client'
import { AccordionItem, Accordion } from '@nextui-org/accordion'

interface AccordionDescriptionProps {
  description: string
}
export default function AccordionDescription ({ description }: AccordionDescriptionProps) {
  return (
    <Accordion isCompact className='px-0'>
      <AccordionItem key='1' aria-label='Accordion 1' title=' Descripcion del Puesto'>
        <p className='text-sm text-foreground-800'>
          {description}
        </p>
      </AccordionItem>
    </Accordion>

  )
}
