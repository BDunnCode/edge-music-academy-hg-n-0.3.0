import ButtonOne from '@/components/ButtonOne';
import ButtonTwo from '@/components/ButtonTwo';
import ModalNav from '@/components/ModalNav';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
        // Main Wrapper
        <header className="w-full text-white bg-black flex-col fixed flex justify-center items-center" >
            <div className="flex justify-center 
            border-b border-white w-full">
              <div className="banner flex w-full xl:max-w-[1200px] md:justify-between h-[49px] items-center">
                <Image 
                    src="/edge2.png"
                    height="220"
                    width="220"
                    alt="logo"
                  />
                  <div className=" gap-2 hidden md:flex">
                    <ButtonOne />
                    <ButtonTwo />
                  </div>
              </div>
            </div>
            <div className="banner flex border-white w-full xl:w-[1200px] justify-between h-[49px] items-center">
                <div className="button-container flex gap-4">
                    <p className="hidden lg:block">
                      Classes in Naperville & Homer Glen
                    </p>
                    <div className="flex gap-2 md:hidden">
                      <ButtonOne />
                      <ButtonTwo />
                    </div>
                </div>
                <ModalNav />
                <div className="hidden xl:flex">
                    <ul className="flex gap-3">
                        <li className="hover:cursor-pointer hover:opacity-80
                        hover:text-purple-700">
                          <Link href="">
                            About
                          </Link>
                          
                        </li>
                        <li className="hover:cursor-pointer hover:opacity-80
                        hover:text-purple-700">
                          <Link href="">
                            Lessons
                          </Link>    
                        </li>
                        <li className="hover:cursor-pointer hover:opacity-80
                        hover:text-purple-700">
                          <Link href="">
                            Locations
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
      )
    }
    
    export default Header;