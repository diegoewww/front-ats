'use client'

import { toggleOpenDrawer } from '@/store/OpenDrawer/slice'
import { useAppDispatch } from './useStore'

export const useToggleOpenDrawer = () => {
  const dispatch = useAppDispatch()

  const toggleOpenToDrawer = () => {
    dispatch(toggleOpenDrawer())
  }

  return { toggleOpenToDrawer }
}
