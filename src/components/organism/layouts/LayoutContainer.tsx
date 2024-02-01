export default function LayoutContainer ({ children }: { children: React.ReactNode }) {
  return (
    <section className='container mx-auto px-4 md:-mt-4'>
      {children}
    </section>
  )
}
