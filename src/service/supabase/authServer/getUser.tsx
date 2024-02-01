import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { typeUser } from '@/service/types/databaseExtensionSupabbase'

const getUser = async () => {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()

  return {
    user,
    userType: user?.user_metadata.type_user as typeUser
  }
}
export default getUser
