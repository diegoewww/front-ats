import AccountSidebar from './AccountSidebar'
// import LayoutContainer from "@/components/organism/layouts/LayoutContainer";

export default function AccountLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex'>
      <AccountSidebar />
      <main className='flex-1'>
        {children}
      </main>
    </div>
  )
}
