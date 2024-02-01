import Link from 'next/link'

interface ContactSectionProps {
  icon: React.ReactNode
  description: string
  isLink?: boolean
  href?: string
}
export function ContactSection ({ icon, description, isLink, href }: ContactSectionProps) {
  return (
    <p className='flex items-center '>
      {icon}
      {
        (isLink === true)
          ? <Link href={href ?? ''} className='ml-2 hover:text-secondary-700 text-secondary-500 duration-300'>{description}</Link>
          : <span className='ml-2'>{description}</span>
      }
    </p>
  )
}
