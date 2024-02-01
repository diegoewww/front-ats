'use client'

import { toggleOpenOffers } from '@/store/OpenOffersMovile/slice'
import { useAppDispatch } from './useStore'

export const useToggleOpenOffers = () => {
  const dispatch = useAppDispatch()

  const toggleOpenOffer = () => {
    dispatch(toggleOpenOffers())
  }

  return { toggleOpenOffer }
}
