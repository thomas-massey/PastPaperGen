import React from 'react'

// 3 main things:
// 1. Free tier - 3 tokens (perminant)
// 2. Plus tier - 10 tokens (per month) - AI marking
// 3. Premium tier - unlimited tokens (per month) - AI marking

function pricing() {
    return (
        <div>
            <div className="flex justify-center items-center h-24 bg-black text-white">
                <h1 className='text-6xl font-semibold'>Pricing</h1>
            </div>
            {/* Table to compare the 3 tiers */}
            <div class="flex justify-center">
                <div class="bg-white shadow-md rounded-lg px-4 py-4 mx-4 my-4 text-center">
                    <div class="px-4 py-5 sm:p-6">
                        <h2 class="text-3xl font-bold text-gray-900">Free</h2>
                        <p class="mt-4 text-gray-600">Includes 3 generation tokens</p>
                        <p class="mt-4 text-gray-600">Limited access to features</p>
                        <p class="mt-4 text-gray-600">Basic support</p>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900">Price: £0</h3><p class="mt-4 text-gray-600">per month</p>
                        <a href="#" class="mt-8 block w-full bg-blue-500 text-white py-3 text-center font-bold rounded-lg hover:bg-blue-700">Sign up</a>
                    </div>
                </div>

                <div class="bg-white shadow-md rounded-lg px-4 py-4 mx-4 my-4 text-center">
                    <div class="px-4 py-5 sm:p-6">
                        <h2 class="text-3xl font-bold text-gray-900">Plus</h2>
                        <p class="mt-4 text-gray-600">Includes 20 generation tokens</p>
                        <p class="mt-4 text-gray-600">Full access to features such as AI marking</p>
                        <p class="mt-4 text-gray-600">Basic support</p>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900">Price: £9.99</h3><p class="mt-4 text-gray-600">per month</p>
                        <a href="#" class="mt-8 block w-full bg-blue-500 text-white py-3 text-center font-bold rounded-lg hover:bg-blue-700">Sign up</a>
                    </div>
                </div>
                <div class="bg-white shadow-md rounded-lg px-4 py-4 mx-4 my-4 text-center">

                    <div class="px-4 py-5 sm:p-6">
                        <h2 class="text-3xl font-bold text-gray-900">Pro</h2>
                        <p class="mt-4 text-gray-600">Includes unlimited generation tokens</p>
                        <p class="mt-4 text-gray-600">Full access to features such as AI marking</p>
                        <p class="mt-4 text-gray-600">Premium support</p>
                        <h3 class="mt-6 text-2xl font-bold text-gray-900">Price: £19.99</h3><p class="mt-4 text-gray-600">per month</p>
                        <a href="#" class="mt-8 block w-full bg-blue-500 text-white py-3 text-center font-bold rounded-lg hover:bg-blue-700">Sign up</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default pricing