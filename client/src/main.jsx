import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

import domain from './AUTH0_DOMAIN.js'
import clientId from './AUTH0_CLIENT_ID.js'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Contribute from './pages/Contribute'
import Clarity from 'components/Clarity'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Clarity />,
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
