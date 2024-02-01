import AuthContainer from '@/components/organism/login/AuthContainer'
import FormEmpresa from './FormEmpresa'

export default function PageSingUpEmpresa (
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
            <h1 className='text-2x1 font-semibold mb-6 text-center'>Crea tu cuenta y comienza a reclutar</h1>
            <FormEmpresa message={message ?? ''} />
          </div>
        </AuthContainer>
      </div>
    </article>
  )
}
