import React from 'react'

export default function add() {
  return (
    <div>
        <h1>Add</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" name="avatar" />
            <button type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={async (e) => {
                    e.preventDefault();
                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const avatar = e.target.avatar.value;
                    const body = { name, email, avatar };
                    const response = await fetch('/api/add', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(body),
                    });
                    const result = await response.json();
                    console.log(result);
                }}
            >
                Submit
            </button>
        </form>
    </div>
  )
}