import React, { useEffect, useRef } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/SubscribeForm'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {

    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    })

    // Image Animation
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -100,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    // Text Content Animation
    gsap.from(textRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })

    // Cards Animation
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    // Hover Animation for Cards
    cardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      }
    })
  }, [])

  return (
    <div>
      
      {/* About Section */}
      <div ref={titleRef} className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Content */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        {/* Image */}
        <img 
          ref={imageRef}
          className='w-full md:max-w-[450px]' 
          src={assets.about_img} 
          alt="About Us" 
        />
        
        {/* Text Content */}
        <div ref={textRef} className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        {/* Quality Assurance */}
        <div 
          ref={(el) => (cardsRef.current[0] = el)}
          className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 cursor-pointer'
        >
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>

        {/* Convenience */}
        <div 
          ref={(el) => (cardsRef.current[1] = el)}
          className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 cursor-pointer'
        >
          <b>Convenience:</b>
          <p className='text-gray-600'>
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>

        {/* Exceptional Customer Service */}
        <div 
          ref={(el) => (cardsRef.current[2] = el)}
          className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 cursor-pointer'
        >
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />

    </div>
  )
}

export default About