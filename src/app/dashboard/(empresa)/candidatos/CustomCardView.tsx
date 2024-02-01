import CustomCard from '@/components/molecule/customCardCandidato/customCard'
import { Postulante } from './mocks'

interface CustomCardViewProps {
  postulante: Postulante
}

export default function CustomCardView ({ postulante }: CustomCardViewProps) {
  return (
    <CustomCard
      key={postulante.id}
      nombre={postulante.name}
      apellidos={postulante.last_name}
      estudios='Estudios'
      sueldoPretendido='Sueldo pretendido'
      experienciasLaborales='Experiencias laborales'
      imagen={postulante.avatar_url}
    />
  )
}
