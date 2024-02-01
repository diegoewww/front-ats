import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  // La ruta `/auth/callback` es necesaria para el flujo de autenticación del lado del servidor implementado
  // por el paquete Auth Helpers. Intercambia un código de autenticación para la sesión del usuario.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  // const requestUrl = nueva URL (solicitud.url)
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code != null) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    // const supabase = createClient(cookieStore)
    await supabase.auth.exchangeCodeForSession(code)
  }
  // console.log('redirecting to', requestUrl.origin)
  // console.log(requestUrl)
  // NextResponse.redirect(new URL('/dashboard', request.url))
  return NextResponse.redirect(new URL('/completeForm', request.url))
}
