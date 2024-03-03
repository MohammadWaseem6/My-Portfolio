/* eslint-disable no-unused-vars */
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../Assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px- bg-[#0a192f] text-gray-300">
            <div>
                <img src={logo} alt='logo' style={{ width: "100px" }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex '>
                <li>
                    <Link to='home' smooth={true} duration={500} className='text-white group border-2 px-3 py-2 my-1 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-xl'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}
                        className='text-white group border-2 px-3 py-2 my-1 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-xl'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}
                        className='text-white group border-2 px-3 py-2 my-1  flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-xl'>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}
                        className='text-white group border-2 px-3 py-2 my-1  flex items-center hover:bg-pink-600 hover:border-pink-600
                    rounded-xl'>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}
                        className='text-white group border-2 px-3 py-2 my-1 flex items-center hover:bg-pink-600 hover:border-pink-600
                    rounded-xl'>
                        Contact
                    </Link>
                </li>
            </ul>


            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile view */}
            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/feed/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Linkedin  <FaLinkedin size={30} />
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li> */}
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li> */}

                    <li className='w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/MohammadWaseem6'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Github <FaGithub size={30} className="ml-2" />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#435334]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://twitter.com/home'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Twitter <FaTwitter size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#35374B]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://mail.google.com/mail/u/0/#inbox'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5F0F40]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar;
