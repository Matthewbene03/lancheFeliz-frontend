import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"

import GlobalStyles from './styles/GlobalStyles'
import store, { persistor } from './store'
import NavMenu from "./components/menuNavegacao/NavMenu";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <GlobalStyles />
            <NavMenu />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <ToastContainer autoClose={3000} className={"toast-container"} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
