import React from 'react'
import Image from 'next/image'

function Contact() {
    return (
        <div>

            <h1>Contact</h1>
            <form id="contact-form" method="POST">
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
            <div className="contact-info text-center">
                <a href="https://www.reddit.com/r/pastpapergen/">
                    <Image src="/reddit.png" alt="Reddit" width={100} height={100} />
                </a>
                <a href="https://twitter.com/pastpapergen">
                    <Image src="/twitter.png" alt="Twitter" width={100} height={100} />
                </a>
            </div>
        </div>
    )
}

export default Contact