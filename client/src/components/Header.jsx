import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
        <div className='container mx-auto flex items-center px-2 justify-between'>
          <div className='h-full'>
            <Link to={"/"} className='h-full flex justify-center items-center'>
              <h1>GrabVault</h1>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header