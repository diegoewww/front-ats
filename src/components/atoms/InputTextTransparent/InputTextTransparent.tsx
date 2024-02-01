import { Input } from '@nextui-org/input'

interface Props {
  type: string
  placeholder: string
  size?: 'sm' | 'md' | 'lg'
  icon: JSX.Element
  [key: string]: any
}

export default function InputTextTransparent (props: Props) {
  const { type, placeholder, icon, size = 'md', ...rest } = props
  return (
    <Input
      type={type}
      placeholder={placeholder}
      variant='faded'
      radius='sm'
      labelPlacement='outside'
      size={size}
      {...rest}
      classNames={{
        label: 'text-black/50 dark:text-white/90',
        input: [
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60'
        ],
        innerWrapper: 'bg-transparent',
        inputWrapper: [
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
    />
  )
}
