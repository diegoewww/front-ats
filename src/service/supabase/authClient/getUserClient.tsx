'use client'
import { getSupabase } from '@/hooks/supabase/useSupabase'
import { typeUser } from '@/service/types/databaseExtensionSupabbase'

export async function getUserClient () {
  const supabase = getSupabase()

  const {
    data: { user }
  } = await supabase.auth.getUser()

  return {
    user,
    userType: user?.user_metadata.type_user as typeUser
  }
}
