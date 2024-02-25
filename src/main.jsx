
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './Home.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './Login.jsx'
import App from './App.jsx'
import Signup from './Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login"  element={<Login />} />
    <Route path="/chat"  element={<App />} />
    <Route path="/signup"  element={<Signup />} />
  </Routes>
  
  </BrowserRouter>,
)
