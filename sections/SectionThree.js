import React from 'react'

const SectionThree = () => {
  return (
    <div className="flex flex-col border-2 border-green-500 items-center justify-center gap-5 lg:flex-row lg:gap-20">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23867.68462823745!2d-87.931569!3d41.602551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e41f52d479eaf%3A0x93506854463cff0b!2s15750%20S%20Bell%20Rd%20Suite%202e%2C%20Homer%20Glen%2C%20IL%2060491!5e0!3m2!1sen!2sus!4v1741063651447!5m2!1sen!2sus" 
        width="400" 
        height="300" 
        style={{ border: 0 }}      
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.468124637375!2d-88.1325990235849!3d41.73199467454862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e593251437057%3A0x41c646e88c07fc6!2sEdge%20Music%20Academy%20Naperville!5e0!3m2!1sen!2sus!4v1741064098945!5m2!1sen!2sus" 
        width="400" 
        height="300" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default SectionThree