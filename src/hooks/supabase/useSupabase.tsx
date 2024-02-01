'use client'
import { Database } from '@/service/types/database'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient<Database>()
export function useSupabase () {
  return {
    supabase
  }
}

export function getSupabase () {
  return supabase
}
