import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Test from './test'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import process from 'process'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test />
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
