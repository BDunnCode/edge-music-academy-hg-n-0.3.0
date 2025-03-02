import Hero from "@/sections/Hero";
import SectionOne from "@/sections/SectionOne";
import SectionTwo from "@/sections/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="w-full">
        <Hero />
        <SectionOne />  
        <SectionTwo /> 
      </div>
    </div>
  )
}