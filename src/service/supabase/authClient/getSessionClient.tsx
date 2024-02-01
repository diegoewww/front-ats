'use client'
import { getSupabase } from '@/hooks/supabase/useSupabase'

export async function getSessionClient () {
  const supabase = getSupabase()

  const {
    data: { session }
  } = await supabase.auth.getSession()

  return session
}
