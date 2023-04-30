import React from 'react'

export default function SelectCountry() {
  return (
    <div className='bg-gradient-to-r from-blue-400 via-green-500 to-purple-500'>
        <h1 className='text-6xl font-semibold p-9 text-center'>Select your country:</h1>
        <div>
            <form className='flex justify-center items-center box-border p-9'>
                <input type="radio" id="india" name="country" value="india" />
                <label for="india">India</label><br />
                <input type="radio" id="usa" name="country" value="usa" />
                <label for="usa">USA</label><br />
                <input type="radio" id="uk" name="country" value="uk" />
                <label for="uk">UK</label><br />
                <input type="radio" id="canada" name="country" value="canada" />
                <label for="canada">Canada</label><br />
            </form>
        </div>
    </div>
  )
}