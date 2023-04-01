import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './ProfilePicture.css'

function ProfilePicture() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      {/* Circular image */}
      {isAuthenticated && (
        <img src={user.picture} alt={user.name} className="profile-picture" />
      )}
    </div>
  )
}

export default ProfilePicture