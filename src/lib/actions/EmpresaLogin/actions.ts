'use server'
import empresaValidationSchema from '@/schemas/createEmpresa.schema'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { convertYupErrorToCustomError } from '../convertYupErrorToCustomError'
import { typeUser } from '@/service/types/databaseExtensionSupabbase'

const supabase = createServerActionClient({ cookies })
const origin = headers().get('origin')

interface ValidationErrorEmpresa {
  companyName?: string
  recruiterName?: string
  companyAddress?: string
  companyEmail?: string
  companyPassword?: string
}

export async function signUpEmresa (_: any, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())
  let validateData
  try {
    validateData = await empresaValidationSchema.validate(rawFormData, { abortEarly: false })
  } catch (error) {
    console.log(convertYupErrorToCustomError(error))
    return convertYupErrorToCustomError<ValidationErrorEmpresa>(error)
  }

  const { error } = await supabase.auth.signUp({
    email: validateData.companyEmail,
    password: validateData.companyPassword,
    options: {
      emailRedirectTo: `${origin as string}/auth/callback`,
      data: {
        company_name: validateData.companyName,
        company_address: validateData.companyAddress,
        company_avatar_url: 'https://avatars.githubusercontent.com/u/59839881?v=4',
        name_recruiter: validateData.recruiterName,
        type_user: typeUser.empresa,
        isform: true
      }
    }
  })

  if (error != null) {
    return redirect(`/login/signup/aplicante?message=${error.message}}`)
  }

  redirect('/dashboard')
}
