/* eslint-disable @next/next/no-img-element */
'use client'

import { useCallback, useState } from 'react'
import { comfortaa } from '@/fonts/font'
import LinkIconAside from '@/components/atoms/LinkIcon/LinkIconAside'
import { PaperIcon, TableDashboardIcon, TemplateIcon, WorkIcon, ArrowDown } from '../../../../public/svgComponent'
import { Link } from '@nextui-org/link'
import IconCheckedTheme from '@/components/atoms/IconCheckedTheme/IconCheckedTheme'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/button'
import { useSelectedLayoutSegments } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { User as Usertype, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { User } from '@nextui-org/user'
import PopoverAtom from '@/components/atoms/Popover/PopoverNotification'
import { toast } from 'sonner'
import { typeUser } from '@/service/types/databaseExtensionSupabbase'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover'
import { Divider } from '@nextui-org/divider'

export default function Navbar({ children, session, isform, userType }: { children: React.ReactNode, session: Usertype | null, isform: boolean, userType: typeUser }) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const segments = useSelectedLayoutSegments()
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const isSelect = useCallback(
    (segment: string) => {
      return segments[2] === segment
    },
    [segments] // Dependencia: la función se recreará solo si 'segments' cambia
  )

  const changeMyTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    toast.success('Sesión cerrada correctamente')
    router.push('/')
    router.refresh()
  }
  return (
    <>
      <div className=''>
        {/* menu lateral */}
        {
          (session != null && isform) && (
            <aside
              className={`bg-primary dark:bg-background/70 dark:border-none backdrop-blur-lg border-r-[1px] border-divider flex px-2 py-2 w-screen fixed bottom-0 
            md:py-0 md:backdrop-blur-none md:bg-background/0 md:dark:bg-background/0 md:pt-20 md:h-screen md:block 
            ${open ? 'md:w-48' : 'md:w-16'} duration-100 z-20`}
            >
              <LinkIconAside
                href='/ofertas'
                tooltipMessage='Ofertas'
                open={open}
                svg={<WorkIcon />}
                text='Empleos'
                isSelect={segments[1] === 'ofertas'}
              />
              {userType === typeUser.empresa
                ? (
                  <>
                    <LinkIconAside
                      href='/dashboard'
                      tooltipMessage='dashboard'
                      open={open}
                      svg={<TableDashboardIcon />}
                      text='Dashboard'
                      isSelect={segments[0] === 'dashboard' && segments.length === 2}
                    />
                    <LinkIconAside
                      href='/dashboard/template'
                      tooltipMessage='ver Templates'
                      open={open}
                      svg={<TemplateIcon />}
                      text='Templates'
                      isSelect={isSelect('template')}
                    />
                  </>
                )
                : (
                  <LinkIconAside
                    href='/dashboard/postulaciones'
                    tooltipMessage='postulaciones'
                    open={open}
                    svg={<PaperIcon />}
                    text='Postulaciones'
                    isSelect={isSelect('postulaciones')}
                  />
                )}
            </aside>
          )
        }

        <div className=''>
          {/* menu superior */}
          <nav className='p-3 sticky z-20 top-0 left-20 border-b-[1px] w-[100%] border-divider dark:border-none duration-100 bg-background/10 backdrop-blur-lg'>
            <div className='flex items-center gap-3'>
              {
                (session != null && isform) &&
                <Button isIconOnly color='default' variant='light' aria-label='hamburguer' className='hidden md:block' onClick={() => setOpen(!open)}>
                  <i className='pi pi-align-center' />
                </Button>
              }
              <Link
                href='/'
                className='flex items-center gap-2 py-1 px-2 rounded-xl hover:bg-surfaceHover '
              >
                <img
                  src='https://joyit.pe/wp-content/uploads/2023/03/isotipo1.png.webp'
                  className='w-9 h-9 rounded-xl'
                  height={10}
                  width={10}
                  alt=''
                />
                <h1 className={`${comfortaa.variable} antialiased font-comfortaa text-2xl text-foreground`}>
                  Joyit
                </h1>
              </Link>

              <div className='flex-1 text-end'>
                <div className='flex justify-end items-center gap-3'>
                  <IconCheckedTheme handleTheme={changeMyTheme} />
                  {
                    (session != null)
                      ? (
                        <>
                          {
                            !isform &&
                            <Link href='/dashboard' color='foreground' as={Link}>
                              Completa el formulario
                            </Link>
                          }
                          {
                            (userType === typeUser.empresa)
                              ? (
                                <>
                                  <Popover
                                    showArrow backdrop='opaque' classNames={{
                                      base: [
                                        // arrow color
                                        'before:bg-default-200'
                                      ],
                                      content: [
                                        'py-2 px-2 border border-default-200',
                                        'bg-gradient-to-br from-white to-default-300',
                                        'dark:from-default-100 dark:to-default-50'
                                      ]
                                    }}
                                  >
                                    <PopoverTrigger>
                                      <Button className='capitalize text-foreground-800 group' variant='flat' color='primary' startContent={<i className='pi pi-plus  duration-200 group-hover:scale-105' />}>
                                        Crear Oferta
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                      <div className='grid py-1'>
                                        <Button as={Link} href='/dashboard/crearOferta' variant='light' color='primary' className={`${!isform ? 'hidden' : 'block'}`}>
                                          <span className='flex items-center justify-center h-full w-full gap-2'><i className='pi pi-plus' />Crear oferta</span>
                                        </Button>
                                        <Divider className='my-2' />
                                        <Button as={Link} href='/dashboard/template' variant='light' color='secondary' className={`${!isform ? 'hidden' : 'block'}`}>
                                          <span className='flex items-center justify-center h-full w-full gap-2'><TemplateIcon />Usar Template</span>
                                        </Button>
                                      </div>
                                    </PopoverContent>
                                  </Popover>

                                </>
                              )
                              : (
                                <>
                                  <Link href='/dashboard/postulaciones' color='foreground' className={`${!isform ? 'hidden' : 'block'}`}>
                                    Mis postulaciones
                                  </Link>
                                  <div className={`${!isform ? 'hidden' : 'block'}`}>
                                    <PopoverAtom />
                                  </div>
                                </>

                              )
                          }

                          <Dropdown placement='bottom-end'>
                            <DropdownTrigger>
                              <User
                                as='button'
                                avatarProps={{
                                  isBordered: true,
                                  src: session?.user_metadata.avatar_url ?? session?.user_metadata.company_avatar_url
                                }}
                                className='transition-transform'
                                description={`@${session?.user_metadata.name as string ?? session?.user_metadata.company_name}`}
                                name={session?.user_metadata.name ?? session?.user_metadata.name_recruiter}
                              />
                            </DropdownTrigger>
                            <DropdownMenu aria-label='Profile Actions' variant='flat'>
                              <DropdownItem key='profile' className='h-12 gap-2'>
                                <p className='font-semibold '>Signed in as</p>
                                <p className='font-semibold text-foreground-500/90 '>{session.email}</p>
                              </DropdownItem>
                              <DropdownItem key='divider' className='h-0'>
                                <Divider />
                              </DropdownItem>

                              <DropdownItem key='settings' href={userType === typeUser.aplicante ? '/dashboard/account/aplicante/editarPerfil' : '/dashboard/account/empresa/editarPerfil'} startContent={<i className='pi pi-user' />}>
                                {userType === typeUser.aplicante ? 'Mi Perfil' : 'Mi Cuenta'}
                              </DropdownItem>

                              <DropdownItem key='logout' color='danger' onClick={handleSignOut} className='text-danger' startContent={<i className='pi pi-sign-out' />}>
                                Cerra Sesion
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </>
                      )
                      : (
                        <>
                          {/* //?Iniciar Sesion */}
                          <Button
                            variant='flat'
                            color='primary'
                            className='w-[206px] h-[40px] text-color-black'

                          >
                            Publica Gratis
                          </Button>
                          {/* //?Crear cuenta */}
                          <Dropdown placement='bottom'>
                            <DropdownTrigger>
                              <Button
                                variant='flat'
                                endContent={<svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-chevron-down' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 9l6 6l6 -6' /></svg>}
                                className='w-[162px] h-[40px] text-color-black'
                              >
                                Registrate
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu variant='faded' aria-label='Dropdown menu Login'>
                              <DropdownItem key='empresa' startContent={<i className='pi pi-user' />} href='/login/signup/aplicante'>
                                Profesionales
                              </DropdownItem>
                              <DropdownItem key='aplicante' startContent={<i className='pi pi-building' />} href='/login/signup/empresa'>
                                Empleadores
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <Dropdown placement='bottom'>
                            <DropdownTrigger>
                              <Button
                                variant='flat'
                                color='primary'
                                className='w-[162px] h-[40px] text-color-black'
                                endContent={<svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-chevron-down' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 9l6 6l6 -6' /></svg>}
                              >
                                Ingresa
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu variant='faded' aria-label='Dropdown menu Login'>
                              <DropdownItem key='empresa' startContent={<i className='pi pi-user' />} href='/login/signIn/aplicante'>
                                Profesionales
                              </DropdownItem>
                              <DropdownItem key='aplicante' startContent={<i className='pi pi-building' />} href='/login/signIn/empresa'>
                                Empleadores
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>

                        </>)
                  }
                </div>
              </div>
            </div>
          </nav>

          <main
            className={` ${(session == null || !isform) ? '' : open ? 'md:ml-48' : 'md:ml-16'} md:p-7 duration-100`}
          >
            <div
              aria-hidden='true'
              className='fixed hidden dark:md:block dark:opacity-50 -top-[80%] -left-[20%] 2xl:-top-[60%] 2xl:-right-[45%] -z-50'
            >
              <img
                src='https://nextui.org/gradients/docs-right.png'
                className='relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-90 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large'
                alt='docs right background'
                data-loaded='true'
              />
            </div>
            <div
              aria-hidden='true'
              className='fixed hidden dark:md:block dark:opacity-50 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] -z-50 rotate-12 '
            >
              <img
                src='https://nextui.org/gradients/docs-right.png'
                className='relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large'
                alt='docs right background'
                data-loaded='true'
              />
            </div>
            {children}
            <div
              aria-hidden='true'
              className='fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] -z-10'
            >
              <img
                src='https://nextui.org/gradients/docs-left.png'
                className='relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large'
                alt='docs left background'
                data-loaded='true'
              />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
