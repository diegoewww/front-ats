'use client'
import { getSupabase } from '@/hooks/supabase/useSupabase'

interface EditPasswordUser {
  password: string
}

export const handleEditPasswordAplicante = async ({ password }: EditPasswordUser) => {
  const supabase = getSupabase()

  const { data, error } = await supabase.auth.updateUser({
    password
  })
  return { data, error }
}
