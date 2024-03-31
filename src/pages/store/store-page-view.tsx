import { Outlet } from "react-router-dom"
import NavbarStoreSection from "../../sections/store/navbar/navbar-store-section"
import FooterStoreSection from "../../sections/store/footer/footer-store-section"

type Props = {}

const StorePageView = (props: Props) => {



  return (
    <>
        <NavbarStoreSection/>   
        
        <Outlet/>
        <FooterStoreSection/>
    </>
  )
}

export default StorePageView