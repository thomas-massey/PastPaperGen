import ListTopics from "@/components/learn/ListTopics";
import React from "react";

export default function paper_generation() {
    return (
        <div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h1 className="text-6xl font-semibold p-9">Paper Generation</h1>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h2 className="text-4xl font-semibold p-9">You have x tokens left.</h2>
            </div>
            <div className="float-left w-1/2">
                <div className="flex justify-center items-center h-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
                    <h2 className="text-4xl font-semibold p-9">Generate a paper</h2>
                </div>
                <div className="flex justify-center items-center h-16 bg-black text-white">
                    <h2 className="text-4xl font-semibold p-9">Options</h2>
                </div>
                <div className="flex justify-center items-center  bg-black text-white">
                    <form>
                        <ListTopics />
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={() => {
                        // Generate paper
                        const paper_url = "/papers/paper.pdf";
                        // Insert the paper into the embed
                        document.getElementById("past_paper").src = paper_url;
                        // Set correct dimensions
                        document.getElementById("past_paper").width = "800";
                        document.getElementById("past_paper").height = "1000";
                    }}
                >
                    Generate
                </button>
            </div>
            <div className="float-right w-1/2">
                <div className="flex justify-center items-center h-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
                    <h2 className="text-4xl font-semibold p-9">Or enter a code!</h2>
                    <form>
                        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" type="text" placeholder="Enter code here" />
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center h-16 bg-black text-white">
                <h1 className="text-4xl font-semibold p-9">Here is your paper:</h1>
            </div>
            <div className="flex justify-center p-8">
                <embed id="past_paper" src="" type="application/pdf"></embed>
            </div>
        </div>
    );
}
