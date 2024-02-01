
'use server'

import aplicanteValidationSchema from '@/schemas/createAplicante.schema'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { convertYupErrorToCustomError } from '../convertYupErrorToCustomError'
import { typeUser } from '@/service/types/databaseExtensionSupabbase'
import { Database } from '@/service/types/database'

const supabase = createServerActionClient<Database>({ cookies })
const origin = headers().get('origin')
interface ValidationErrorAplicante {
  firstName?: string
  lastName?: string
  dni?: string
  phone?: string
  email?: string
  password?: string
}

export async function signIn (prevState: any, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error != null) {
    return error
  }

  return redirect('/ofertas')
}

export async function signUp (prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())
  let validateData
  try {
    validateData = await aplicanteValidationSchema.validate(rawFormData, { abortEarly: false })
  } catch (error) {
    return convertYupErrorToCustomError<ValidationErrorAplicante>(error)
  }

  const { error } = await supabase.auth.signUp({
    email: validateData.email,
    password: validateData.password,
    options: {
      emailRedirectTo: `${origin as string}/auth/callback`,
      data: {
        name: validateData.firstName,
        user_name: validateData.lastName,
        avatar_url: 'https://avatars.githubusercontent.com/u/59839881?v=4',
        type_user: typeUser.aplicante,
        last_name: validateData.lastName,
        dni: validateData.dni,
        phone: validateData.phone,
        isform: true
      }
    }
  })

  if (error != null) {
    return redirect(`/login/signup/aplicante?message=${error.message}}`)
  }
  redirect('/ofertas')
}

export async function signUpGithub (prevState: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())
  let validateData
  try {
    validateData = await aplicanteValidationSchema.validate(rawFormData, { abortEarly: false })
  } catch (error) {
    return convertYupErrorToCustomError<ValidationErrorAplicante>(error)
  }

  const { data: { user }, error: errorUser } = await supabase.auth.getUser()

  if (errorUser != null) {
    return redirect(`/completeForm?message=${errorUser.message}}`)
  }

  const { error: errorAplicante } = await supabase
    .from('aplicante')
    .insert(
      [
        {
          id: user?.id as string,
          name: validateData.firstName,
          last_name: validateData.lastName,
          dni: validateData.dni,
          phone: validateData.phone,
          avatar_url: user?.user_metadata.avatar_url
        }
      ]
    )
    .select()

  if (errorAplicante != null) {
    return redirect(`/completeForm?message=${errorAplicante.message}}`)
  }

  const { error: errorPublicUser } = await supabase
    .from('users')
    .update({
      isform: true
    })
    .eq('id', user?.id as string)
    .select()

  if (errorPublicUser != null) {
    return redirect(`/completeForm?message=${errorPublicUser.message}}`)
  }

  redirect('/ofertas')
}
