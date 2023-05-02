import React from 'react'

export default function paper_generation() {
    return (
        <div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h1 className='text-6xl font-semibold p-9'>Paper Generation</h1>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h2 className='text-4xl font-semibold p-9'>
                    You have x tokens left.
                </h2>
            </div>
            {/* Use 4f200d to ffd93d */}
            <div className="flex justify-center items-center h-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
                <h2 className='text-4xl font-semibold p-9'>
                    Generate a paper
                </h2>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h2 className='text-4xl font-semibold p-9'>
                    Options
                </h2>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <form>
                    <input type="checkbox" id="as" name="as" value="as"/>
                    <label for="AS">AS</label><br/>

                    <input type="checkbox" id="a" name="a" value="a"/>
                    <label for="A">A</label><br/>

                    <input type="checkbox" id="mei" name="mei" value="mei"/>
                    <label for="MEI">MEI</label><br/>
                </form>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => {
                    // Generate paper
                    const paper_url = "/papers/paper.pdf";
                    // Insert the paper into the embed
                    document.getElementById("past_paper").src = paper_url;
                    // Set correct dimensions
                    document.getElementById("past_paper").width = "800";
                    document.getElementById("past_paper").height = "1000";
                }}>
                    Generate
                </button>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h1 className='text-4xl font-semibold p-9'>Here is your paper:</h1>
            </div>
            <div className="flex justify-center p-8">
                <embed id="past_paper" src="" type="application/pdf"></embed>
            </div>
        </div>
    )
}