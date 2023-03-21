import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

import React from 'react'

function App() {
  return (
    <main>
      <h1>Auth0 React Quickstart</h1>
      <LoginButton />
      <LogoutButton />
    </main>
  )
}

export default App