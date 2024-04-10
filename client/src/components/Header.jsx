import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-purple-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-purple-500'>Property</span>
                    <span className='text-purple-700'>Wala</span>
                </h1>
            </Link>
            <form className='bg-purple-100 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 md:w-44'/>
                <FaSearch className='text-purple-600'/> 
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-purple-900 hover:underline'>Home</li>
                </Link>
                <Link to='about'>
                    <li className='hidden sm:inline text-purple-900 hover:underline'>About</li>
                </Link>
                <Link to='login'>
                    <li className='text-purple-900 hover:underline'>Login</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
