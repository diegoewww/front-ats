interface AuthContainerProps {
  children: React.ReactNode
}
const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div className='w-full bg-foreground-50/50 rounded-lg shadow-md dark:border md:mt-0  xl:p-0 dark:border-foreground-100'>
      {children}
    </div>
  )
}

export default AuthContainer
