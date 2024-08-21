import { useEffect, useState } from 'react'
import LogoutBtn from '../components/logoutBtn';
import Container from './Container';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Images/srmuLogo.png';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const navItems = [{
        name: 'Home',
        slug: '/',
        active: true
    }, {
        name: 'About Us',
        slug: '/about',
        active: true
    },
    {
        name: 'Programmes',
        slug: '/programmes',
        active: true
    },
    {
        name: 'Contact Us',
        slug: '/contact',
        active: true
    }];
    const authList = [
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Register',
            slug: '/signup',
            active: !authStatus
        }];


    // Pending to add onclick function for making navbar endpoints responsive 
    useEffect(() => {
        
    }, [isOpen]);

    return (
        <header className='sticky m-0 top-5 left-5 w-auto border border-white rounded-lg' style={{ backdropFilter: 'blur(10px)' }} id='header'>
            <Container>
                <nav>
                    <div className="max-w-8xl px-4 sm:px-6 lg:px-20">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center lg:order-2 order-0">
                                <div className="flex-shrink-0 ">
                                    <img src={Logo} alt="Shri Ramswaroop Memorial University" onClick={() => navigate('/')} className='w-[65%] lg:w-[80%] cursor-pointer lg:-translate-x-24' />
                                </div>
                            </div>
                            <div className="hidden lg:block lg:order-1 order-2">
                                <div className="ml-4 flex space-x-4 list-none">
                                    {
                                        navItems.map(item => item.active ? (
                                            <li key={item.name}>
                                                <button key={item.slug} onClick={() => navigate(item.slug)} className="text-white hover:bg-[#062e52] px-3 py-2 rounded-md">
                                                    {item.name}
                                                </button>

                                            </li>
                                        ) : null)
                                    }

                                </div>
                            </div>
                            <div className='hidden lg:block order-3'>
                                <div className="ml-4 flex space-x-4 list-none">
                                    {
                                        authList.map(item => item.active? (
                                            <li key={item.name}>
                                                <button key={item.slug} onClick={() => navigate(item.slug)} className="text-white hover:bg-[#062e52] px-3 py-2 rounded-md">
                                                    {item.name}
                                                </button>
                                            </li>): null)
                                    }{
                                        authStatus && (<li className="text-white hover:bg-[#062e52] px-3 py-2 rounded-md"><LogoutBtn /></li>)
                                    }
                                </div>
                            </div>
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-white hover:bg-[#062e52] p-2 rounded-md"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
};


export default Header
