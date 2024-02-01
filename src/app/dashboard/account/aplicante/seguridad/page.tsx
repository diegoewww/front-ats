import FormChangePassword from './ChangePasswordForm'

export default function SeguridadPage () {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-start w-full max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold mt-8 mb-4'>Cambiar contraseña</h1>
        <FormChangePassword />
      </div>
    </div>
  )
}
