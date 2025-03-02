"use client";

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
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
              <div className="absolute bg-black right-0">
                <ul>
                    <li>About</li>
                    <li>Lessons</li>
                    <li>Locations</li>
                </ul>
              </div>
            </>
        }
    </div>

  )
}

export default ModalNav