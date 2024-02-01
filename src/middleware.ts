import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './service/types/database'
// import { typeUser } from './service/types/databaseExtensionSupabbase'

// const regexAccount = /^\/dashboard\/account\/aplicante(?:\/.*)?$/
// const regexLogin = /^\/login\/.*$/
const publicRoutes = [
  '/',
  '/ofertas',
  '/login/signIn/aplicante',
  '/login/signIn/empresa',
  '/login/signup/aplicante',
  '/login/signup/empresa'
]
// const regexDashboardAplicante = /^\/dashboard\/(?!ofertas$|account$|postulaciones$).*$/
// This function can be marked `async` if using `await` inside
export async function middleware (req: NextRequest) {
  try {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient<Database>({ req, res })
    const {
      data: { user }
    } = await supabase.auth.getUser()

    // ? Si el usuario no esta autenticado y esta en las paginas que no son de login, lo redirecciona a la pagina principal
    if (user === null && !publicRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', req.url))
    }

    // ? Si el usuario esta autenticado y esta en la pagina de login, lo redirecciona al dashboard
    if (user !== null && publicRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // // ? Si el usuario es una empresa y esta en paginas que no son de empresa, lo redirecciona al dashboard de empresa
    // if (user?.user_metadata.type_user === typeUser.empresa && (req.nextUrl.pathname === '/dashboard/postulaciones' || regexAccount.test(req.nextUrl.pathname))) {
    //   return NextResponse.redirect(new URL('/dashboard', req.url))
    // }

    // // ? Si el usuario es un aplicante y esta en paginas que no son de aplicante, lo redirecciona al dashboard de ofertas
    // if (user?.user_metadata.type_user === typeUser.aplicante && await (regexDashboardAplicante.test(req.nextUrl.pathname))) {
    //   return NextResponse.redirect(new URL('/dashboard/ofertas', req.url))
    // }

    // // ? Si el usuario no completo el formulario y no esta en la pagina de completar formulario, lo redirecciona a la pagina de completar formulario una vez que lo complete este middleware se desactiva
    // const { data: users, error } = await supabase
    //   .from('users')
    //   .select('isform')
    //   .eq('id', user?.id as string)

    // if (error != null) {
    //   return NextResponse.next({
    //     request: {
    //       headers: req.headers
    //     }
    //   })
    // }

    // if (
    //   user !== null &&
    //   !users?.[0].isform &&
    //   req.nextUrl.pathname !== '/completeForm'
    // ) {
    //   return NextResponse.redirect(new URL('/completeForm', req.url))
    // }

    return res
  } catch (e) {
    // ¡Si estás aquí, no se pudo crear un cliente Supabase!
    // Esto probablemente se debe a que no ha configurado variables de entorno.
    return NextResponse.next({
      request: {
        headers: req.headers
      }
    })
  }

  // console.log(user?.user_metadata.type_user === 'empresa')
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login/signup/aplicante', '/login/signup/empresa', '/login/signIn/aplicante', '/login/signIn/empresa', '/completeForm',
    '/dashboard/(.*)', '/dashboard'
  ]
}
