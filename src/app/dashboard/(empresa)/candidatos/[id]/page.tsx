/* eslint-disable @typescript-eslint/restrict-plus-operands */
import OfferTittle from './components/offerTittle'
import { Suspense } from 'react'
import { Divider } from '@nextui-org/divider'
import CardsCandidate from './components/CardsCandidate'
import Search from './components/search'
import SelectComponent from './components/select'
import DrawerContent from './components/DrawerContent'
import DrawerR from '@/components/molecule/Drawer/Drawer'

export default async function PageCandidato ({
  params,
  searchParams
}: {
  params: { id: string }
  searchParams?: { search?: string
    order?: string
    apliId?: string }
}) {
  const { id } = params
  const searchQuery = searchParams?.search ?? ''
  const order = searchParams?.order === 'true'
  const apliId = searchParams?.apliId ?? ''
  return (
    <>
      <header className='grid grid-cols-[600px,1fr]'>
        <div className=''>
          <Suspense fallback={<div>Loading Ofertas</div>}>
            <OfferTittle idOffer={id} />
          </Suspense>
        </div>
        <div className='flex py-5 items-end justify-end gap-10'>
          <Search placeholder='Buscar candidato' />
          <SelectComponent />
        </div>
      </header>

      <Divider />

      <h2 className='my-5 text-2xl'>Candidatos</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
        <Suspense
          key={searchQuery + order}
          fallback={<div>Loading Candidatos</div>}
        >
          <CardsCandidate
            idOffer={id}
            searchUsers={searchQuery}
            order={order}
          />
        </Suspense>
      </div>
      <DrawerR header={<p><i className='pi pi-file-export text-lg' /> Curriculum</p>}>
        {apliId !== '' &&
          <Suspense
            fallback={<div>Loading Drawer...dsaaaaaaaaaaaaaaaaaaa</div>}
            key={apliId}
          >
            <DrawerContent apliId={apliId} />
          </Suspense>}
      </DrawerR>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}
