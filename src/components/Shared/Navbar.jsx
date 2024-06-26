"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const session = useSession();
    console.log(session);

    const navItems = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Blog",
            path: '/blog'
        },
        {
            title: "Contacts",
            path: '/contacts'
        },
    ]

    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image src='/assets/logo.svg' alt='logo' height={10} width={100} className='w-24 h-12' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex space-x-4'>
                        {
                            navItems.map(item =>
                                <Link key={item.path} href={item.path} className='font-bold hover:text-primary duration-500'>{item.title}</Link>
                            )
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-primary hover:text-white">Appointment</button>
                    {
                        !session.data ?
                            <Link href={'/signin'}><button className='btn btn-primary ml-5'>Login</button></Link> :
                            <button className='btn btn-primary ml-5' onClick={() => signOut()}>Logout</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;