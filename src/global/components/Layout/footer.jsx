import React from 'react';
import Logo from "../logo.png"
import LogoDark from '../logodark.png'
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="relative bg-beig dark:bg-primaryblue">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div className="flex">
                        <NavLink to="/">
                            <img className='h-14 dark:hidden' src={Logo} alt="logo" />
                            <img className='h-14 hidden dark:block' src={LogoDark} alt="logo" />
                        </NavLink>
                    </div>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-light text-black 0 sm:mb-0 dark:text-white">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-grey sm:mx-auto dark:border-green lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
