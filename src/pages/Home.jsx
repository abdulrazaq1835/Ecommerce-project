import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import SubscribeForm from '../components/SubscribeForm'

const Home = () => {
  return (
    <div>
  <Hero/>
  <LatestCollection/>
  <BestSeller/>
  <OurPolicy/>
  <SubscribeForm/>
   </div>
  )
}

export default Home
