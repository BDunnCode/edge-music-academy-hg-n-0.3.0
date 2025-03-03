"use client";

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link';
import React, { useState } from 'react'

const ModalNav = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden ">
        {!isOpen &&
            <button onClick={() => setIsOpen(true)}>
                <HamburgerMenuIcon
                  className="hover:cursor-pointer"
                />
            </button>
        }

        {isOpen && 
            <>
              <button onClick={() => setIsOpen(false)}>
                <Cross1Icon 
                  className="hover:cursor-pointer"                
                />
              </button>
              <div className="absolute bg-black right-0 top-25">
                <ul className="flex flex-col gap-5 px-10">
                    <li className="hover:text-purple-700 py-2
                    hover:cursor-pointer">
                      <Link href="">
                        About
                      </Link>
                    </li>
                    <li className="hover:text-purple-700 py-2
                    hover:cursor-pointer">
                      <Link href="">
                        Lessons
                      </Link>
                    </li>
                    <li className="hover:text-purple-700 py-2
                    hover:cursor-pointer">
                      <Link href="">
                        Locations
                      </Link>
                    </li>
                </ul>
              </div>
            </>
        }
    </div>

  )
}

export default ModalNav