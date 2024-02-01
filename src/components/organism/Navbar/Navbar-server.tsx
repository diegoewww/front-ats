// import getSession from '@/service/supabase/authServer/getSession'
import { supabaseServerComponent as supabase } from '@/service/supabase/Instance/supabaseServerComponent'
import Navbar from './Navbar'
import getUser from '@/service/supabase/authServer/getUser'

// import { getSupabase } from '@/hooks/supabase/useSupabase'

export default async function NavbarServer({ children }: { children: React.ReactNode }) {
  const { user, userType } = await getUser()

  const { data: users } = await supabase
    .from('users')
    .select('isform')
    .eq('id', user?.id as string)

  return (
    // @ts-expect-error
    <Navbar session={user} userType={userType} isform={users?.[0]?.isform}>
      {children}
    </Navbar>
  )
}
