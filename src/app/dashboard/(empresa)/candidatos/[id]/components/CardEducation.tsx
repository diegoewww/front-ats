import CardGlow from '@/components/atoms/CardGlow/CardGlow'

interface CardEducationProps {
  nonbreCarrera: string
  institucion: string
  tipoDeEstudio: string
  estado: string
  fechaInicio: string
  fechaFin: string | null
}

export default function CardEducation ({ nonbreCarrera, estado, institucion, tipoDeEstudio, fechaInicio, fechaFin }: CardEducationProps) {
  return (
    <CardGlow>
      <h3 className='text-md text-foreground-600 font-bold group-hover:text-foreground-900'>{nonbreCarrera}<span className='text-sm font-bold text-foreground-700/70'> ({estado}) </span></h3>
      <p className='text-sm text-foreground-700/80 leading-7 group-hover:text-foreground-800'>{institucion} - {tipoDeEstudio}</p>
      <p className='text-sm text-foreground-600/70'>{fechaInicio} - {fechaFin === null ? 'Presente' : fechaFin}</p>
    </CardGlow>
  )
}
