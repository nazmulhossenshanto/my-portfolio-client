import { Outlet } from "react-router"
import Navbar from "../../components/Navbar/Navbar"

 

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default RootLayout