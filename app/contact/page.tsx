"use client"

import axios from "axios";
import { error } from "console";
import { toast } from "react-hot-toast";

const contact = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-gray-800">
                Contact
            </h1>
            <p className="text-center text-gray-600">
                This website gives students the power and tools to create their own past papers.
            </p>
            <div>
                <form 
                className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg shadow-lg"
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const data = new FormData(form);
                        const name = data.get("name") as string;
                        const email = data.get("email") as string;
                        const topic = data.get("topic") as string;
                        const message = data.get("message") as string;
                        axios.post("/api/contact", {
                            name,
                            email,
                            topic,
                            message
                        }).then(() => {
                            toast.success("Message sent!");
                        }).catch(
                            (error) => {
                                console.log(error)
                                toast.error(error.response.data);
                            }
                        );
                    }
                }>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="topic">Topic</label>
                    <select id="topic" name="topic">
                        <option value="_">Select a topic</option>
                        <option value="account_support">Account Support</option>
                        <option value="billing">Billing</option>
                    </select>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default contact;