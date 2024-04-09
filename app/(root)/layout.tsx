import MobileNav from '@/components/shared/MobileNav';
import SideBar from '@/components/shared/SideBar';
import react from 'react';
const Layout  = ({children}:{children:React.ReactNode})=>{
   return (
    <main >
      <SideBar/>
      <MobileNav/>
      {children}
      </main>
   )
}
export default Layout;