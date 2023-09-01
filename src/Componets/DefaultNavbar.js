'use client';

import {  Navbar } from 'flowbite-react';
import logo from '../IMG/logo2.png'

export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
      className='bg-[#123a49] h-[6rem]'
    >
      <Navbar.Brand className='gap-2' href="https://it.expleogroup.com/it/">
        <img className='w-[15rem]'
          alt="Flowbite React Logo"
          src={logo}
        />
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="/"
        >
          <p className='text-white'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="/map">
          <p className='text-white'>Map</p>
        </Navbar.Link>
        <Navbar.Link href="/map">
          <p className='text-white'>Company</p>
        </Navbar.Link>
        <Navbar.Link href="/map">
          <p className='text-white'>User</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


