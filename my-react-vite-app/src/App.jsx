import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Hero from './pages/Hero'
import Cars from './pages/Cars'
import RentalForm from './pages/RentalForm'
import Home from './pages/Home';
import AboutCompany from './pages/AboutCompany';
import RegistrationForm from './pages/RegistrationForm';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header />
    <Routes>
      <Route path="/Home" Component={Home} />
      <Route path="/Hero" Component={Hero} />
      <Route path="/AboutCompany" Component={AboutCompany} />
      <Route path="/Cars" Component={Cars} />
      <Route path="/RentalForm" Component={RentalForm} />
    </Routes>
    <Footer />
   </>
  )
}

export default App

{/* <>
<Header/>
 <Hero/>
 <Cars/>
 <RentalForm/>
 <Footer/>
 </> */}