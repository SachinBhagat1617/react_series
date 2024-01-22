import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        {/* you are going to change home layout to about or contact us
      but header and footer will remain same so, you have to pass it 
      dynamically to do so you have to use Outlet */}
        <Footer />
        </>
    )
}
export default Layout