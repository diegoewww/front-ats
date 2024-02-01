'use client'

import DropDownAtom, { Options } from '@/components/atoms/Dropdown/DropDownAtom'
import InputTextTransparent from '@/components/atoms/InputTextTransparent/InputTextTransparent'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Card } from '@nextui-org/card'
import { BusquedaIcon, SearchIcon } from '../../../../public/svgComponent'
import { fechapublicacion, ubicacion } from './const/optionsDropdown'
import { Divider } from '@nextui-org/divider'
import { ChangeEvent, useEffect, useState } from 'react'
import ScrollPanelAtom from '@/components/atoms/ScrollPanel/ScrollPanel'
import { redirect, usePathname, useSelectedLayoutSegment, useRouter } from 'next/navigation'
import { screenIs } from '@/utils/screen'
import { useToggleOpenOffers } from '@/hooks/useToggleOpenOffers'
import type { Contract, Country, Modality, Oferta } from '@/service/types/databaseExtensionSupabbase'

interface Props {
  dataOffers: Oferta[]
  dataCountries: Country[]
  dataModalities: Modality[]
  dataContracts: Contract[]
  children: React.ReactNode
}

export default function LayoutOfertas ({ dataOffers, dataCountries, dataModalities, dataContracts, children }: Props) {
  const pathname = usePathname()
  const segment = useSelectedLayoutSegment()
  const router = useRouter()
  const { toggleOpenOffer } = useToggleOpenOffers()

  const [selectedCity, setSelectedCity] = useState<Options | null>(null)
  const [selectedContract, setSelectedContract] = useState<Options | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<Options | null>(null)
  const [selectedModality, setSelectedModality] = useState<Options | null>(null)
  if (pathname === '/ofertas') {
    redirect(`/ofertas/${dataOffers[0]?.id ?? '0'}`)
  }

  const matchesOffers = dataOffers.filter((offer) => {
    const matchesContract =
      selectedContract !== null ? offer.typoOfContract.description === selectedContract.name : true

    const matchesCountry =
      selectedCountry !== null ? offer.country.description === selectedCountry.name : true

    const matchesModality =
      selectedModality !== null ? offer.modality.description === selectedModality.name : true

    return matchesContract && matchesCountry && matchesModality
  })

  const selectedCityTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    const selectedOption = e.target.value
    const foundOption = ubicacion.find(Option => Option.code === selectedOption)
    console.log(foundOption)
    setSelectedCity(foundOption ?? null)
  }

  const selectedContractTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value
    const contracts = dataContracts.map(contract => ({
      name: contract.description,
      code: contract.id.toString()
    }))
    const foundOption = contracts.find(Option => Option.code === selectedOption)
    setSelectedContract(foundOption ?? null)
  }

  const selectedCountryTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value
    const countries = dataCountries.map(country => ({
      name: country.description,
      code: country.id.toString()
    }))
    const foundOption = countries.find(Option => Option.code === selectedOption)
    setSelectedCountry(foundOption ?? null)
  }

  const selectedModalityTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value
    const modalities = dataModalities.map(country => ({
      name: country.description,
      code: country.id.toString()
    }))
    const foundOption = modalities.find(Option => Option.code === selectedOption)
    setSelectedModality(foundOption ?? null)
  }

  const handleToggle = (offerId: string) => {
    if (screenIs('sm') === true || screenIs('sm') === false) {
      toggleOpenOffer()
    }
    router.push(`/ofertas/${offerId}`)
  }

  // Obtención de valores para los dropdowns
  const [countryOptions, setCountryOptions] = useState<Options[]>([])
  useEffect(() => {
    const countries = dataCountries.map(country => ({
      name: country.description,
      code: country.id
    }))

    setCountryOptions(countries)
  }, [dataCountries])

  const [modalityOptions, setModalityOptions] = useState<Options[]>([])
  useEffect(() => {
    const modalities = dataModalities.map(modality => ({
      name: modality.description,
      code: modality.id
    }))

    setModalityOptions(modalities)
  }, [dataModalities])

  const [contractOptions, setContractOptions] = useState<Options[]>([])
  useEffect(() => {
    const contracts = dataContracts.map(contract => ({
      name: contract.description,
      code: contract.id
    }))

    setContractOptions(contracts)
  }, [dataContracts])

  return (
    <>
      <div className='grid gap-4'>
        <div className='grid md:grid-cols-10 gap-4 '>
          <InputTextTransparent type='search' placeholder='Quick search ...' icon={<SearchIcon className='icon-Opacity' />} className='md:col-span-5' />
          <InputTextTransparent type='search' placeholder='Quick search ...' icon={<BusquedaIcon className='icon-Opacity w-5 h-5 stroke-current' />} className='hidden md:block md:col-span-4' />
          <Button color='primary' radius='md' size='md' className='hidden md:block p-2'>Buscar </Button>
        </div>
        <div className='hidden md:flex md:flex-wrap gap-4'>
          <DropDownAtom placeholder='Fecha de publicacion' options={fechapublicacion} selectedCity={selectedCity} selectedCityTemplate={selectedCityTemplate} className='max-w-xs' size='sm' />
          <DropDownAtom placeholder='Tipo de contrato' options={contractOptions} selectedCity={selectedCity} selectedCityTemplate={selectedContractTemplate} className='max-w-xs' size='sm' />
          <DropDownAtom placeholder='Ubicacion' options={countryOptions} selectedCity={selectedCity} selectedCityTemplate={selectedCountryTemplate} className='max-w-xs' size='sm' />
          <DropDownAtom placeholder='Modalidad de trabajo' options={modalityOptions} selectedCity={selectedCity} selectedCityTemplate={selectedModalityTemplate} className='max-w-xs' size='sm' />
        </div>
        <Button color='danger' aria-label='Like' className='md:hidden' endContent={<i className='pi pi-sliders-h' />}>
          Filtrar Empleos
        </Button>
      </div>
      <Divider className='my-[0.55rem]' />
      <div className='h-[73vh] md:h-[78vh] grid md:grid-cols-2 gap-4'>
        {matchesOffers.length === 0
          ? (
            <small>No hay datos</small>
            )
          : (
            <ScrollPanelAtom className='min-h-full md:min-h-[80vh]'>
              <section className='flex flex-col gap-4'>
                {matchesOffers.map((offer) => {
                  const isSelected = segment === offer.id?.toString()
                  return (
                    <button onClick={() => handleToggle(offer.id?.toString() ?? '')} key={offer.id} className='w-full'>
                      <Card className={`bg-content2/60 p-3 grid gap-6 ${isSelected ? 'bg-default-200/60' : ''} shadow-xl hover:bg-default-200/60 active:scale-95 rounded-lg duration-200 cursor-pointer border-none`}>
                        <header className='flex items-center justify-between gap-3'>
                          <div className='flex items-center gap-3'>
                            <Avatar name='P' />
                            <div className='flex flex-col items-start gap-1'>
                              <h1 className='text-xl capitalize'>{offer.position}</h1>
                              <span className='text-xs'>Adecco Consulting - {offer.typoOfContract.description}</span>
                            </div>
                          </div>

                          <div>
                            <i className='pi pi-bookmark' />
                          </div>
                        </header>
                        <section className='text-start'>
                          <p className='truncated-text'>
                            {offer.description.replace(/<[^>]*>/g, '')}
                          </p>
                        </section>
                        <footer className='grid grid-cols-2 gap-3'>
                          <article className='flex items-center gap-2'>
                            <i className='pi pi-map-marker' />
                            <span className='text-sm'>{offer.country.description}</span>
                          </article>

                          <article className='flex items-center gap-2'>
                            <i className='pi pi-briefcase ' />
                            <span className='text-sm'>{offer.modality.description}</span>
                          </article>

                          <article className='flex items-center gap-2'>
                            <i className='pi pi-user ' />
                            <span className='text-sm'>{offer.levelOfExperience.description}</span>
                          </article>

                          <article className='flex items-center gap-2'>
                            <i className='pi pi-money-bill ' />
                            <span className='text-sm'>
                              S/.{offer.sueldoMinimo} - {offer.sueldoMaximo}
                            </span>
                          </article>
                        </footer>
                      </Card>
                    </button>
                  )
                })}
              </section>
            </ScrollPanelAtom>
            )}

        {children}

      </div>
    </>
  )
}
