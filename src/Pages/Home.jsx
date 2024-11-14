import React from 'react'
import HeroPage from '../Components/HeroPage'
import NewAbout from '../Components/NewAbout'
import ServicesCard from '../Components/ServicesCard'
import Bgfix from '../Components/Bgfix'
import Testimonial from '../Components/Testimonial'
import ClientCompany from '../Components/ClientCompany'
import Counter from '../Components/Counter'
import OurServces from './OurServces'

const Home = () => {
  return <>

    <HeroPage />
    <NewAbout />
    <ServicesCard />
    <Counter />
    <Bgfix />
    <OurServces />
    {/* <Testimonial/> */}
    {/* <ClientCompany/> */}


  </>
}

export default Home