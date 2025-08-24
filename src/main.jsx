import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../src/Components/Home/Home.jsx'
import Gaming from '../src/Components/Gaming/Gaming.jsx'
import Gamingproductid from './Components/Productid/Gamingproductid.jsx'
import { ToastContainer } from 'react-toastify';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "gamingaccessories",
        element: <Gaming />
      },
      {
        path: "professionalaccessories",
        element: <Gaming />
      },
      {
        path: "about",
        element: <Gaming />
      },
      {
        path: "contact",
        element: <Gaming />
      },
      {
        path: "/gamingaccessories/:productId",
        element: <Gamingproductid />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
// transition={Bounce}
/>
  </StrictMode>,
)
