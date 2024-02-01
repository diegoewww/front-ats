'use client'
import { getSupabase } from '@/hooks/supabase/useSupabase'
import type { user } from '@/service/types/databaseExtensionSupabbase'

export const handleEditUserAplicante = async ({ dni, lastName, name, phone }: user) => {
  const supabase = getSupabase()
  const { data, error } = await supabase.auth.updateUser({
    data: {
      name,
      last_name: lastName,
      phone,
      dni
    }
  })
  return { data, error }
}
