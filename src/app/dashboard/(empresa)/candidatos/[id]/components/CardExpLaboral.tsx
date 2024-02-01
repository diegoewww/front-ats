import CardGlow from '@/components/atoms/CardGlow/CardGlow'
import AccordionDescription from './Accordion'

interface CardExpLaboralProps {
  tiuloPuesto: string
  tiempo: string
  fechaInicio: string
  fechaFin: string | null
  descripcion: string
}
export default function CardExpLaboral ({ tiuloPuesto, fechaFin, fechaInicio, tiempo, descripcion }: CardExpLaboralProps) {
  return (
    <CardGlow>
      <h3 className='text-md text-foreground-600 font-bold group-hover:text-foreground-900'>{tiuloPuesto}<span className='text-sm font-bold text-foreground-600/70 group-hover:text-foreground-700'> ({tiempo}) </span></h3>
      <p className='text-sm text-foreground-600/60'>{fechaInicio} - {fechaFin === null ? 'Presente' : fechaFin}</p>
      <AccordionDescription description={descripcion} />
    </CardGlow>
  )
}
