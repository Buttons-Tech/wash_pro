import React from 'react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <>
    <div className='hero-container'>
        <span>LEKKI PREMIUM</span>
        <span>MOBILE CAR WASH</span>
        <span>DELIVERED TO YOUR GATE</span>
        <span>Effortless car care in Lekki estates. Request a wash, relax and shine!</span>
    </div>
    <div className='hero-buttons-container'>
        <Button title="Download on App store" />
        <Button  title="Learn More"/>
    </div>
    </>
  )
}

export default Hero