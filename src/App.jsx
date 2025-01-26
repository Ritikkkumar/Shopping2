import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Header from './components/Header'
import appStore from './utils/appStore.js'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
      <Header/>
      <Outlet/>
      </Provider>
    </>
  )
}

export default App
