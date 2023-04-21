import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

// Get domain and client ID from environment variables
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

import { HashRouter , Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Contribute from './pages/Contribute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
