import React from 'react'
import Image from 'next/image'

// A question is at the top, a user can input into the text box, and then it is sent to the backend API to be processed, it then displays the output

function gpt_test() {
  return (
    <div className="flex flex-col items-center justify-center py-4">
        <h1 className="text-4xl font-bold">GPT Test</h1>
        <Image src="/test_image.png" alt="test_image" width={500} height={500} />
        <div className="flex flex-row items-center justify-center py-4">
            <textarea id="input" className="border-2 border-black rounded-lg" placeholder="Input" width={500} height={500}>Input</textarea>
        </div>
        <div className="flex flex-row items-center justify-center py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                // send input to backend API
                fetch('/api/learn/gpt_test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        input: document.getElementById("input").value
                    })
                })
                .then(response => response.json())
                .then(data => {
                    document.getElementById("marks").innerHTML = "Marks: " + data.marks;
                    document.getElementById("improvement").innerHTML = "Improvement: " + data.improvement;
                })
            }}>
                Submit
            </button>
        </div>
        <div className="flex flex-row text-2xl items-center justify-center py-4">
            <p id="marks"></p>
        </div>
        <div className="flex flex-row text-xl items-center justify-center py-4">
            <p id="improvement"></p>
        </div>
    </div>
  )
}

export default gpt_test