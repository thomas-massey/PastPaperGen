import React from 'react';

export default function add() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const avatar = formData.get('avatar');
        const body = { name, email, avatar };
        const response = await fetch('/api/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const result = await response.json();
            console.log(result);
            document.getElementById('result').innerHTML = "User added with name " + result.name + " and email " + result.email + " and avatar " + result.avatar;
        } else {
            document.getElementById('result').innerHTML = "Error: " + response.statusText;
        }
    };

    return (
        <div>
            <h1 className="text-4xl text-center font-bold mb-8">
                Add
            </h1>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="avatar">Avatar</label>
                <input type="text" id="avatar" name="avatar" />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
                <p className="text-sm text-gray-500 mt-4" id="result"></p>
            </form>
        </div>
    );
}
