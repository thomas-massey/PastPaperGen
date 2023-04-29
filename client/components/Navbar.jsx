import Logo from '../public/logo.png'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center border-b-2 pb-4 mb-8">
          <Image src={Logo} alt="Logo" width={100} height={100} />
          <ul className="flex gap-8 text-lg font-bold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/sign-up">Sign up</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
          </ul>
        </nav>
    )
}