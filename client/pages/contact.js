import React from 'react'
import Image from 'next/image'

function Contact() {
    return (
        <div>

            <h1 className='text-6xl font-semibold p-9 text-center'>
                Contact us
            </h1>
            <div className='flex justify-center items-center'>
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
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-6xl font-semibold p-9 text-center'>
                    Please check our other contacts in our footer!
                </h1>
            </div>
        </div>
    )
}

export default Contact