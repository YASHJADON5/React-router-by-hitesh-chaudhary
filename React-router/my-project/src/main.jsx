import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import ContactUs from './components/ContactUs.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Github ,{githubInfoLoader} from './components/Github.jsx'

  // import { githubInfoLoader } from './components/Github.jsx'

// const router= createBrowserRouter([
//   {
//     path:"/",
//     element: <App></App>,
//     children:[
//      {
//       path:"",
//       element:<Home></Home>
//      },
//      {
//       path:"contact-us",
//       element:<ContactUs></ContactUs>
//      },
//      {
//       path:"aboutus",
//       element:<About></About>
//      }
      
//     ]

//   } 


// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>

      <Route path="" element={<Home></Home>}></Route>
      <Route path="aboutus" element={<About></About>}></Route>
      <Route path="contact-us" element={<ContactUs></ContactUs>}></Route>
      <Route path="user/:userId" element={<User></User>}></Route>
      <Route
       loader={githubInfoLoader}
       path="github" 
       element={<Github></Github>}>

       </Route>




      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
