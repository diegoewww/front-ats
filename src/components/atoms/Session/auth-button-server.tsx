
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import AuthButton from './auth-button'

export const dynamic = 'force-dynamic'

export async function AuthButtonServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return <AuthButton session={session} />
}
