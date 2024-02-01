'use client'
import { getSupabase } from '@/hooks/supabase/useSupabase'
import type { empresa } from '@/service/types/databaseExtensionSupabbase'

export const handleEditEmpresa = async ({ nameRecruiter, companyName, companyAddress }: empresa) => {
  const supabase = getSupabase()
  const { data, error } = await supabase.auth.updateUser({
    data: {
      company_name: companyName,
      name_recruiter: nameRecruiter,
      company_address: companyAddress

    }
  })
  return { data, error }
}
