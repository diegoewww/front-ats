interface CardGlowProps {
  children: React.ReactNode
}
export default function CardGlow ({ children }: CardGlowProps) {
  return (
    <>
      <div className='group relative w-full px-2'>
        <div className='absolute mx-2 -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-10 blur transition duration-500 group-hover:opacity-100' />
        <div className='relative rounded-lg bg-white dark:bg-black/90 p-3  text-foreground-50'>
          {children}
        </div>
      </div>
    </>
  )
}
