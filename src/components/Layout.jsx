import { Navbar } from "../components/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-700/50 pt-4">
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout