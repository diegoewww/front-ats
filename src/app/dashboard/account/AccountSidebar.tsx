import getUser from '@/service/supabase/authServer/getUser'
import LinkIconAside from '@/components/atoms/LinkIcon/LinkIconAside'
import { WorkIcon } from '../../../../public/svgComponent'
import { typeUser } from '@/service/types/databaseExtensionSupabbase'

export default async function AccountSidebar () {
  const { userType } = await getUser()
  return (
    <aside className='bg-primary dark:bg-background/70 dark:border-none backdrop-blur-lg border-r-[1px] border-divider flex px-2 py-2 w-screen bottom-0 md:py-0 md:backdrop-blur-none md:bg-background/0 md:dark:bg-background/0 md:h-screen md:block md:w-48 duration-100 z-20'>
      {
        userType === typeUser.aplicante ? <LinkLayoutAplicante /> : <LinkLayoutEmpresa />
      }
    </aside>
  )
}

function LinkLayoutAplicante () {
  return (
    <>
      <LinkIconAside
        href='/dashboard/account/aplicante/editarPerfil'
        tooltipMessage='Editar Perfil'
        open
        svg={<WorkIcon />}
        text='Editar Perfil' isSelect={false}
      />
      <LinkIconAside
        href='/dashboard/account/aplicante/editarPostulacion'
        tooltipMessage='Editar Datos de Postulación'
        open
        svg={<WorkIcon />}
        text='Editar Datos de Postulación' isSelect={false}
      />
      <LinkIconAside
        href='/dashboard/account/aplicante/seguridad'
        tooltipMessage='Seguridad'
        open
        svg={<WorkIcon />}
        text='Seguridad' isSelect={false}
      />
    </>
  )
}

function LinkLayoutEmpresa () {
  return (
    <>
      <LinkIconAside
        href='/dashboard/account/empresa/editarPerfil'
        tooltipMessage='Editar datos de la empresa'
        open
        svg={<WorkIcon />}
        text='Editar datos de empresa' isSelect={false}
      />
      <LinkIconAside
        href='/dashboard/account/empresa/seguridad'
        tooltipMessage='Seguridad'
        open
        svg={<WorkIcon />}
        text='Seguridad' isSelect={false}
      />
    </>
  )
}
