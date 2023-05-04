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
            <button type="submit" onClick={async (e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const avatar = e.target.avatar.value;
                const res = await fetch('/api/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, avatar }),
                });
                const json = await res.json();
                console.log(json);
            }}>Submit</button>
        </form>
    </div>
  )
}