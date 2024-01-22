import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    // layout ->parent
    <Route path='/' element={<Layout/>}> 
      {/*children */}
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User/>}/>
      {/* ye jo user ke colon ke bad jo bhi value likh rahe ho na 
      wo bahut important hai kyunki *wo userid globally saare files mai present rahega*
      and wo basically karta kya hai upar jo link tum search bar mai user/.... ke bad jo bhi likhoge
      uska value store karlega e.g.  user/102 to fir 
      userid mai 102 store hoga and you use this userid variable*/}

    </Route>
  )

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Router provider is self closing component where
     you are going to change home layout to about or contact us
      but header and footer will remain same so, you have to
      pass the path or route the RouterProvider so that it can 
      transfer that section page to home/about/contact-us */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
