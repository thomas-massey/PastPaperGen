import React from 'react'

function About() {
  return (
    <div>
      <div>
        <h1 className="bg-black text-white text-9xl font-bold text-center py-5">
          About
        </h1>
        <h2 className="text-4xl font-semibold text-center py-20">
          This website was created for students by students. It s fundermental purpose is to allow students to create their own past papers. This is no easy feat for students so this website aims to make it as easy as possible, creating contributions to the community from the community.<br />
        </h2>
      </div>
      <div className="justify-center items-center  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <h1 className="bg-black text-white text-9xl font-bold text-center py-5">
          How it works?
        </h1>
        <h2 className="text-4xl font-semibold text-center py-20">
          Papers can be generated using tokens, tokens can either be bought or earned. Tokens can be earned by contributing to the community, for example, by adding a question which we dont yet have, or reporting an error. Tokens can also be bought, this is how we keep the website running.
        </h2>
      </div>
      <div className='bg-black text-white text-9xl font-bold text-center py-10'></div>
      <p className="text-9xl font-semibold text-center py-20">
        🤝
      </p>
    </div>
  )
}

export default About