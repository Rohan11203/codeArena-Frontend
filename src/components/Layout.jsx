import { Navbar } from "../components/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="bg-black pt-4">
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout