import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import { lazy,Suspense } from 'react'
import Login from './components/Login.jsx'

const Home=lazy(()=>import ('./components/Home.jsx'));
const ProductDetails=lazy(()=>import ('./components/ProductDetails.jsx'));
const Cart=lazy(()=>import ('./components/Cart.jsx'));
const Error=lazy(()=>import (`./components/Error.jsx`))


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:(
      <Suspense fallback={<div>Loading</div>}>
        <Error/>
      </Suspense>
    ),
    children:[
      {
        path:"/",
        element:(
          <Suspense fallback={<div>Loading</div>}>
            <Login/>
          </Suspense>
        )
      },
      {
        path:"/home",
        element:(
          <Suspense fallback={<div>Loading</div>}>
            <Home/>
          </Suspense>
        )
      },
      {
        path:"/product/:id",
        element:(
          <Suspense fallback={<div>Loading</div>}>
            <ProductDetails/>
          </Suspense>
        )
      },
      {
        path:"/cart",
        element:(
          <Suspense fallback={<div>Loading</div>}>
            <Cart/>
          </Suspense>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
