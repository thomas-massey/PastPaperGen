import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <form id="contact-form"  method="POST">
            <div className="form-group">
                <label htmlFor="name">Name </label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address </label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div>
                <label htmlFor="subject">Subject </label>
                <select className="form-control">
                    <option>Error with questions</option>
                    <option>Billing</option>
                    <option>Account Support</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message </label>
                <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="contact-info">
            {/* Social media links on images */}
            <a href="https://www.reddit.com/r/pastpapergen/">
                <img src="https://img.icons8.com/color/48/000000/reddit--v1.png" alt="Reddit" />
            </a>
            <a href="https://twitter.com/pastpapergen">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
            </a>
        </div>
    </div>
  )
}

export default Contact