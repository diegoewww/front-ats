/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'
import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const hancleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div>
      {session === null
        ? (
          <Button
            onClick={hancleSignIn}
            startContent={<i className='pi pi-github' />}
            className='mr-5'
          >
            Sign In Github
          </Button>
          )
        : (
          <Button
            onClick={handleSignOut}
            startContent={<i className='pi pi-sign-out' />}
            className='mr-5'
          >
            Sign Out
          </Button>
          )}
    </div>
  )
}
