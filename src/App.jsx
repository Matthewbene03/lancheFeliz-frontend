import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"

import AppRoutes from "./routes/index"
import GlobalStyles from './styles/GlobalStyles'
import store, { persistor } from './store'
import NavMenu from "./components/menuNavegacao/index";
import Footer from "./components/footer/index";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <section>
              <NavMenu />
              <AppRoutes />
              <Footer />
            </section>
            <GlobalStyles />
            <ToastContainer autoClose={3000} className={"toast-container"} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
