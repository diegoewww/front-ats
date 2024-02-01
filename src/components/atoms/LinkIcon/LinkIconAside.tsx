import { Tooltip } from '@nextui-org/tooltip'
import Link from 'next/link'

interface Props {
  href: string
  open: boolean
  svg: JSX.Element
  text: string
  tooltipMessage: string
  tooltipcolor?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  isSelect: boolean
}

export default function LinkIconAside ({ href = '#', text, open, svg, isSelect, tooltipMessage, tooltipcolor = 'primary' }: Props) {
  return (
    <Tooltip
      showArrow
      placement='right'
      content={tooltipMessage}
      color={tooltipcolor}
    >
      <Link href={href} className={`flex flex-col justify-between md:flex-row items-center ${isSelect ? 'bg-content4' : ''} md:justify-start md:gap-3 md:my-3 text-white md:text-foreground  w-full md:h-12 rounded transition-opacity hover:bg-content4 duration-300 `}>
        <span className='md:ml-3 w-6 h-6 `'>
          {svg}
        </span>
        <span className={`font-medium text-sm md:text-base duration-100 ${!open ? 'md:scale-0' : ''}`}>
          {text}
        </span>
      </Link>

    </Tooltip>
  )
}
