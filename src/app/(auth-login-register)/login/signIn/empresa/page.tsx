import AuthContainer from '@/components/organism/login/AuthContainer'
import FormEmail from '../../FormEmail'

export default async function Home () {
  return (
    <article className='grid gap-3'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[87vh] lg:py-0'>
        <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
          <img className='w-8 h-8 mr-2' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg' alt='logo' />
          JoyIt
        </a>
        <AuthContainer>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <FormEmail />
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
              Don’t have an account yet? <a href='#' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>Sign up</a>
            </p>
          </div>
        </AuthContainer>
      </div>

    </article>

  )
}
