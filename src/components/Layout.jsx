import { Navbar } from "../components/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="bg-[#0A0A0A] pt-4">
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout