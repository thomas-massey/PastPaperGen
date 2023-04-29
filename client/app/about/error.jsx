"use client"

export default function Error({ error, reset }) {
    return (
        <div>
            This aint loading up: {error.message}<br />
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}