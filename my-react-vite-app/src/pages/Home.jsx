import React from 'react'
import Hero from './Hero'
import Cars from './Cars'
import WhatsAppButton from './WhatsAppButton'
import RentalForm from './RentalForm'
import AboutCompany from './AboutCompany'
import RegistrationForm from './RegistrationForm'

function Home() {
  return (
     <>

     < RegistrationForm/>
     <AboutCompany/>
     <Cars/>
     <RentalForm/>
     <WhatsAppButton/>
     </>
 

  )
}

export default Home