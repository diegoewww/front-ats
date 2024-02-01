
import AuthContainer from '@/components/organism/login/AuthContainer'
import FormAplicante from './FormAplicante'

export default function PageSingUpAplicante (
  { searchParams }: {
    searchParams: { message: string | undefined }
  }
) {
  const { message } = searchParams
  return (
    <article className='grid gap-4'>
      <div className='flex items-center justify-center px-6 py-8 mx-auto max-w-4xl md:h-[87vh] lg:py-0'>
        <AuthContainer>
          <div className='w-full p-6 rounded-md'>
            <h1 className='text-2x1 font-semibold mb-6 text-center'>Crea tu cuenta y encuentra tu empleo ideal</h1>
            <FormAplicante message={message ?? ''} />
          </div>
        </AuthContainer>
      </div>
    </article>
  )
}
