'use client'

import ScrollPanelAtom from '@/components/atoms/ScrollPanel/ScrollPanel'
import { offer, typeUser } from '@/service/types/databaseExtensionSupabbase'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { useAppSelector } from '@/hooks/useStore'
import { useToggleOpenOffers } from '@/hooks/useToggleOpenOffers'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createPostulacion } from '@/service/supabase/supabaseClient'
import { useState } from 'react'

export default function DetailOffers ({ offer, userType }: { offer: offer, userType: typeUser }) {
  const supabase = createClientComponentClient()
  const [estadoPostulacion, setEstadoPostulacion] = useState<boolean>()
  const toggleOpen = useAppSelector((state) => state.openOffers.isOpen)
  const { toggleOpenOffer } = useToggleOpenOffers()

  const fetchUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user === null) return

    // seleccionar por id de usuario y id de oferta
    const { data: postulaciones } = await supabase
      .from('postulaciones')
      .select('*').eq('aplicante_id', user.id).eq('trabajo_id', offer.id)

    if (postulaciones?.[0] !== undefined) {
      setEstadoPostulacion(true)
      return
    }

    const dataCreatePost = await createPostulacion({ trabajo_id: offer.id, aplicante_id: user.id, sueldo: '800' })
    if (dataCreatePost != null) {
      setEstadoPostulacion(true)
    }
    if (dataCreatePost.error != null) {
      setEstadoPostulacion(false)
    }
  }

  const close = () => {
    toggleOpenOffer()
  }

  return (
    <section className={`${toggleOpen ? 'hidden' : 'absolute'} w-full h-full bg-content1/90 p-4 backdrop-blur-3xl text-foreground left-0 top-0 z-50 md:bg-content2/70 md:shadow-xl md:grid md:gap-4 md:rounded-lg md:text-center md:sticky md:top-[90px] md:min-h-[80vh]`}>
      <div className='grid'>
        <div className='text-start'>
          <Button isIconOnly color='default' variant='light' onPress={close} className='md:hidden'>
            <i className='pi pi-arrow-left w-full text-start' />
          </Button>

        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl capitalize leading-6 text-start'>{offer.tittle}
            <div className='flex items-center '>
              <span className='text-sm text-blue-500'>Adecco Consulting </span> <span className='mx-1'> - </span> <span className='text-sm'>{offer.ubicacion.label}</span>
            </div>
          </h1>
          <Avatar />
        </div>
      </div>
      <div className='text-start my-4 md:my-0'>
        {
          userType === typeUser.aplicante
            ? (
              <Button color='secondary' onPress={fetchUser} isDisabled={estadoPostulacion}>
                {(estadoPostulacion === true) ? 'Ya te postulaste' : 'Postularme'}
              </Button>
              )
            : (
              <div className='flex gap-3 items-center'>
                <Button color='secondary' isDisabled>
                  Postularme
                </Button>
                <div className='p-1 bg-warning rounded-lg'>
                  <i className='pi pi-info text-foreground-900' />El boton de postularme no esta disponible para empresas
                </div>
              </div>
              )
        }
      </div>
      <div className='text-start min-h-[79vh] md:min-h-full'>
        <ScrollPanelAtom className='h-[79vh] md:w-full md:h-[60vh]'>
          <div dangerouslySetInnerHTML={{ __html: offer.description }} />
        </ScrollPanelAtom>
      </div>
    </section>
  )
}
