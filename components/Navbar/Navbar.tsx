import Image from 'next/image';
import GetStarted from '@/components/Account/GetStarted';

const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-row justify-between items-center p-4 rounded-lg bg-gray-200">
                <div className="flex flex-row space-x-4 bg-gray-300 rounded-lg p-4">
                    <a href='/'><Image src="/images/logo.png" width={64} height={64} alt="PastPaperGen Logo" /></a>
                </div>
                <div className="flex flex-row space-x-4 bg-gray-300 rounded-lg p-4">
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/learn'>Learn</a>
                </div>
                <GetStarted />
            </nav>
        </div>
    );
}

export default Navbar;
