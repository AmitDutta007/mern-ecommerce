import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchUserDetails from "./utils/fetchUserDetails";
import { setUserDetails } from "./store/userSlice";
import Axios from "./utils/Axios";
import SummaryApi from "./common/SummaryApi";
import { setAllCategory, setAllSubCategory, setLoadingCategory } from "./store/productSlice";
import { AxiosError } from "axios";
import AxiosToastError from "./utils/AxiosToastError";


function App() {

  const dispatch = useDispatch()
  const location = useLocation()

  // const fetchUser = async () => {
  //   const userData = await fetchUserDetails()
  //   dispatch(setUserDetails(userData.data))
  //   console.log(userData.data);
    
  // }

  const fetchCategory = async()=>{
    try {
        dispatch(setLoadingCategory(true))
        const response = await Axios({
            ...SummaryApi.getCategory
        })
        const { data : responseData } = response

        if(responseData.success){
           dispatch(setAllCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
        }
    } catch (error) {
      AxiosToastError(error)
    }finally{
      dispatch(setLoadingCategory(false))
    }
  }

  const fetchSubCategory = async()=>{
    try {
        const response = await Axios({
            ...SummaryApi.getSubCategory
        })
        const { data : responseData } = response

        if(responseData.success){
           dispatch(setAllSubCategory(responseData.data.sort((a, b) => a.name.localeCompare(b.name)))) 
        }
    } catch (error) {
      AxiosToastError(error)
    }finally{
    }
  }

  
  useEffect(() => {
    // fetchUser()
    fetchCategory()
    fetchSubCategory()
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
