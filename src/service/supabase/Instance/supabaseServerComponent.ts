import { cookies } from 'next/headers'
import { Database } from '@/service/types/database'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const supabaseServerComponent = createServerComponentClient<Database>({ cookies })
