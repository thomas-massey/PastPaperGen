import { useAuth0 } from "@auth0/auth0-react";

import React from 'react'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            // A href is used here instead of a button because the Auth0 loginWithRedirect function
            <a href="#" onClick={() => loginWithRedirect()}>
                Log In
            </a>
        )
    )
}

export default LoginButton