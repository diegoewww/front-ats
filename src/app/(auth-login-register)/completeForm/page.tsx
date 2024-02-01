/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { supabaseServerComponent as supabase } from '@/service/supabase/Instance/supabaseServerComponent'
import { redirect } from 'next/navigation'
import CompleteForm from './formCompleteForm'

export default async function CompleteFormPage (
  { searchParams }: {
    searchParams: { message: string | undefined }
  }
) {
  const { message } = searchParams
  const { data: { user } } = await supabase.auth.getUser()

  const { data: users } = await supabase
    .from('users')
    .select('isform')
    .eq('id', user?.id as string)

  if (users?.[0].isform) {
    redirect('/dashboard')
  }

  return (
    <CompleteForm user={user} message={message ?? ''} />
  )
}
