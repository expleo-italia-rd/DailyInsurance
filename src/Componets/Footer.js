'use client';

import { Footer } from 'flowbite-react';
import logo from '../IMG/logoFooter.png'


export default function FooterWithLogo() {
  return (
    <Footer container className='relative bottom-0 bg-[#123a49]'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="Flowbite Logo"
            
            src={logo}
          />
          <Footer.LinkGroup className='gap-3'>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Privacy Policy
            </Footer.Link>
        
            <Footer.Link href="#">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  )
}


