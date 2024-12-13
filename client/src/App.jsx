import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchUserDetails from "./utils/fetchUserDetails";
import { setUserDetails } from "./store/userSlice";


function App() {

  const dispatch = useDispatch()
  const location = useLocation()

  const fetchUser = async () => {
    const userData = await fetchUserDetails()
    dispatch(setUserDetails(userData.data))
  }
  
  useEffect(() => {
    fetchUser()
    // fetchCategory()
    // fetchSubCategory()
    // fetchCartItem()
  }, [])
  return (
    <>
      <Header />
      <main className='min-h-[78vh]'>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
