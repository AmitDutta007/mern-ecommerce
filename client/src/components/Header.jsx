import { Link } from "react-router-dom"
import Search from "./Search"
import logo from '../assets/logo.webp'

const Header = () => {
  return (
    <>
      <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
        <div className='container mx-auto flex items-center px-2 justify-between'>
          <div className='h-full'>
            <Link to={"/"} className='h-full flex justify-center items-center'>
              <img
                src={logo}
                width={60}
                height={60}
                alt='logo'
                className='hidden lg:block'
              />
              <img
                src={logo}
                width={60}
                height={60}
                alt='logo'
                className='lg:hidden'
              />
            </Link>
          </div>
          <div className='hidden lg:block'>
            <Search />
          </div>
        </div>
        <div className='container mx-auto px-2 lg:hidden'>
          <Search />
        </div>
      </header>
    </>
  )
}

export default Header