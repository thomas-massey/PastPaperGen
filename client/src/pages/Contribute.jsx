import React from 'react'
import axios from 'axios'

function Contribute() {
  return (
    // On submit, the file is sent to the API
    <form onSubmit={e => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('file', e.target.file.files[0])
      axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }}>
      <input type="file" name="file" />
      <input type="submit" value="Upload" />
    </form>
  )
}

export default Contribute