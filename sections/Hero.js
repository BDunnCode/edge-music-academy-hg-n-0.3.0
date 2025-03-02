import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="border-2 border-red-500 mt-[100px]">
      <div className="px-[3%] md:px-[5%] flex flex-col lg:flex-row max-w-7xl mx-auto">
        <div className="border-2 border-green-700 lg:w-[50%]">
              <Image 
                  src="/sheep-placeholder.jpg"
                  height="800"
                  width="800"
                  alt="student playing guitar"
              />
          </div>
          <div className="border-2 border-teal-700 w-full lg:w-[50%] flex flex-col items-center justify-center">
            <div className="p-[10%]">
              <h1 className="text-5xl mb-4">
                Get an <span className="text-[#3C276E] font-bold">Edge</span>.
              </h1>
               <h3 className="text-2xl mb-4 text-gray-800">🎵 Enhance your life with music </h3>
              <p className="flex items-center justify-center">
                As a parent, nothing warms a heart like the 
                huge smile on your childs face after accomplishing a big goal. 
                We see it all the same after a student has given a great performance. 

                In a world of instant gratification, the confidence that comes from hard work is rare and invaluable. 
                This confidence and work ethic gives children a true edge in life. 
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero