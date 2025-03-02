import React from 'react'
import { siteConfig } from '@/lib/site'
import Link from "next/link"
import Image from 'next/image';

const Footer = () => {

  console.log(`${siteConfig}`)

  return (


    <footer className="border-t">
      <div className="mx-auto px-6 py-6 sm:py-10 sm:p">
        <nav className="" aria-label="">
        <ul className="flex justify-center gap-5">
            {siteConfig.socialLinks.map((item) => (
              <li key={item.name} className="hover:bg-primary p-3 rounded-full">
                <Link href="#">
                  <Image
                    src={item.link}
                    alt={item.name}
                    height={24}
                    width={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};


export default Footer