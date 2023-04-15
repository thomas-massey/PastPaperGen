import React, { useState } from 'react'
import axios from 'axios'

function Contribute() {
  return (
    <div>
      <h1>Uploads</h1>
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
      <h1>Generate</h1>
      <form onSubmit={e => {
        e.preventDefault()
        const formData2 = new FormData()
        formData2.append('number_of_questions', e.target.number_of_questions.value)
        formData2.append('AS', e.target.AS.checked)
        formData2.append('A', e.target.A.checked)
        formData2.append('MEI', e.target.MEI.checked)
        axios.post('http://127.0.0.1:5000/api/create_paper', formData2, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      }}>
        <input type="number" name="number_of_questions" />
        <p>AS</p>
        <input type="checkbox" name="AS" />
        <p>A</p>
        <input type="checkbox" name="A" />
        <p>MEI</p>
        <input type="checkbox" name="MEI" />
        <input type="submit" value="Generate" />
      </form>
      <h1>Downloads</h1>
      <button>Download</button>
    </div>
  )
}

export default Contribute