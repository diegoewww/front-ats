'use client'
import { Input } from '@nextui-org/input'

interface Props {
  type: string
  placeholder: string
  size?: 'sm' | 'md' | 'lg'
  icon: JSX.Element
  [key: string]: any
}

export default function InputTextTransparent(props: Props) {
  const { type, placeholder, icon, ...rest } = props
  return (
    <Input
      type={type}
      placeholder={placeholder}
      variant='faded'
      radius='none'
      size='lg'
      labelPlacement='outside'
      classNames={{
        base: ['pb-10'],
        label: ['text-black/50 dark:text-white/90 ', 'pb-10'],
        input: [
          'ml-2',
          'text-xl',
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60'
        ],
        innerWrapper: 'bg-transparent',
        inputWrapper: [
          'rounded-r-full',
          'h-[64px]',
          'w-[460px]',
          'border-default-400/60',
          'backdrop-blur-xl',
          'backdrop-saturate-200',
          'transition-colors',
          'group-data-[focus=true]:border-default-400/90',
          // dark theme
          'dark:bg-default/60',
          'dark:hover:bg-default/70',
          'dark:group-data-[focused=true]:bg-default/60',
          '!cursor-text'
        ]
      }}
      startContent={icon}
      endContent={<i className='pi pi-chevron-down pr-5' />}
    />
  )
}
