import getUser from '@/service/supabase/authServer/getUser'
import FormEditProfile from './EditProfileForm'

export default async function EditarPerfilPage () {
  const { user } = await getUser()
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-start w-full max-w-4xl mx-auto'>
        <div className='flex justify-between items-center w-full mb-6'>
          <h1 className='text-2xl font-bold mt-8 mb-4'>Editar perfil</h1>
          <div className='w-16 h-16 rounded-full overflow-hidden'>
            <img
              src='https://avatars.githubusercontent.com/u/59839881?v=4'
              alt='avatar'
              width={300}
              height={300}
            />
          </div>
        </div>
        <FormEditProfile user={user} />
      </div>
    </div>
  )
}
