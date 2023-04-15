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
            <a href="https://www.facebook.com/">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.twitter.com/">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/">
                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube" />
            </a>
            <a href="https://www.github.com/">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="GitHub" />
            </a>
            <a href="https://www.pinterest.com/">
                <img src="https://img.icons8.com/color/48/000000/pinterest.png" alt="Pinterest" />
            </a>
            <a href="https://www.tumblr.com/">
                <img src="https://img.icons8.com/color/48/000000/tumblr.png" alt="Tumblr" />
            </a>
            <a href="https://www.discord.com/">
                <img src="https://img.icons8.com/color/48/000000/discord-logo.png" alt="Discord" />
            </a>
        </div>
    </div>
  )
}

export default Contact