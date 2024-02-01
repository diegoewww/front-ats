'use client'

import { useState } from 'react'
import CustomCardView from './CustomCardView'
import CardView from './CardView'
import { Postulante } from './mocks'
import { Button } from '@nextui-org/button'

interface CandidatosProps {
  postulantes: Postulante[]
}

export default function Candidatos ({ postulantes }: CandidatosProps) {
  const [showCustomCardView, setShowCustomCardView] = useState(true)
  const toggleView = () => {
    setShowCustomCardView((prevState) => !prevState)
  }

  return (
    <>
      <div className='flex justify-end gap-5 pb-5'>
        <Button onClick={toggleView} variant='bordered'>
          {showCustomCardView ? 'Mostrar en lista' : 'Mostrar en cuadrícula'}
        </Button>
      </div>
      <article>
        {postulantes.length > 0
          ? (
              showCustomCardView
                ? (
                  <div className='grid grid-cols-3 gap-5'>
                    {postulantes.map(postulante => (
                      <CustomCardView key={postulante.id} postulante={postulante} />
                    ))}
                  </div>
                  )
                : (
                  <div className='grid grid-cols-1 gap-5'>
                    {postulantes.map(postulante => (
                      <CardView key={postulante.id} postulante={postulante} />
                    ))}
                  </div>
                  )
            )
          : (
            <p>No hay aplicantes</p>
            )}
      </article>
    </>
  )
}
