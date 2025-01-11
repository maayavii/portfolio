import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState(false);
    return <header className="flex gap-8 justify-between px-6 py-4 bg-primary">

        <a href="" className="flex font-bold text-white">AMAL MANOJ</a>
        <nav className="hidden md:block">
            <ul className="flex gap-8 justify-center font-menuLine text-2xl text-blue-800">
                <li className="hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300">
                    <a href="/">Home</a></li>
                <li className="hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300">
                    <a href="#about">About</a></li>
                <li className="hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300">
                    <a href="#project">Projects</a></li>    
                    <li className="hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300">
                    <a href="#skills">Skills</a></li>
                <li className="hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300">
                    <a href="#contact">Contact</a></li>

            </ul></nav>

        {toggleMenu && <nav className="block md:hidden mobile-nav">
            <ul onClick={()=>setToggleMenu(!toggleMenu)}  className="flex-row gap-8 justify-center bg-black text-white">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#skills">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul></nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-6 ' /></button>



    </header>
}