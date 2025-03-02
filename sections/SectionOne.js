import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
  return (
    <div className="w-full bg-[#3C276E] flex flex-col justify-center">
        <div className="h-[30px] px-[3%] md:px-[5%]"></div>
        <h1 className="text-white text-center text-6xl mb-4">♪ What We're All About ♪</h1>

        <div className="flex flex-col lg:flex-row max-w-7xl border-2 border-black mx-auto px-[3%] md:px-[5%]">
            <div className="lg:w-[50%] flex justify-center items-center">
                <p className="text-white">
                  At Edge Music Academy, You Can Expect:
                  <br />
                  <br />
                  <br />

                  To learn how to practice and get the most out of your practice time

                  Top quality music instruction from individuals with formal music training

                  Rapid skill improvement

                  Lesson plans that incorporate formal music skills along with how to play your favorite songs

                  Motivating and fun lessons that keep students passionate and engaged

                  To learn life skills such as time management, sympathy, empathy, self esteem, critical thinking, and confidence.
                </p>
            </div>
            <div className="lg:w-[50%] flex items-center justify-center">
                <Image 
                  src="/music-stairs-picture.jpg"
                  height="400"
                  width="400"
                  alt="musical stairs picture"
                />
            </div>
        </div>
    </div>
  )
}

export default SectionOne