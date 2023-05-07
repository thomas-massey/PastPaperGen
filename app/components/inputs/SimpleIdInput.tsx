'use client'

import axios from 'axios';
import { useState } from 'react';

const SimpleIdInput = () => {
    const [simpleId, setSimpleId] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSimpleId(value.toUpperCase().replace(/[^0-9A-F]/g, '').substring(0, 10));
    };

    const onSubmit = (simpleId) => {
        // Use the api to get what type of id it is (user, question, paper, issue, etc)
        // Then redirect to the appropriate page
        const type = axios.get(`/api/simple_id/${simpleId}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(simpleId.replace('-', '').toLowerCase());
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="simpleId"
                    id="simpleId"
                    value={simpleId}
                    onChange={handleChange}
                    maxLength={10}
                    required
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="1234-5678-90AB-CDEF"
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-0 px-4 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};


export default SimpleIdInput;