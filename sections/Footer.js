import React from 'react'
import { siteConfig } from '@/lib/site'
import Link from "next/link"
import Image from 'next/image';

const Footer = () => {

  console.log(`${siteConfig}`)

  return (


    <footer className="border-t bg-black">
      <div className="mx-auto px-6 py-6 sm:py-10 sm:p">
        <nav className="" aria-label="">
        <ul className="flex justify-center gap-5">
            {siteConfig.socialLinks.map((item) => (
              <li key={item.name} className="bg-purple-700 p-3 rounded-full 
              hover:opacity-80">
                <Link href={item.link}>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={24}
                    width={24}
                    className="invert"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="footer-contact-info" className="flex flex-col items-center 
      justify-center lg:flex-row gap-5">
        <div className=" text-white 
         w-[290px] px-2 text-center">
          <p>
            Naperville 
          </p>
          <p>
            Phone: 630-216-9190 
          </p>
          <p>
            Address: 32 Foxcroft Road, Suite 112 
          </p>
          <p>
            Naperville, IL, 60565
          </p>
        </div>
        <div className=" text-white 
         w-[290px] px-4 text-center">
          <p>
            Homer Glen
          </p>
          <p>
            Phone: 630-445-1525 
          </p>
          <p>
            Address: 15750 S Bell Rd Suite 2E
          </p>
          <p>
          Homer Glen, IL 60491
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer