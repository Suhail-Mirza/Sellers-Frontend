import { StrictMode,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// const App=lazy(()=>import("./App.jsx"))
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  <Toaster
   toastOptions={{
    position:"top-right",
    style:{
      background:"#283046",
      color:"white"
    }
   }}
  />
  </Provider>
  </BrowserRouter>,
)
