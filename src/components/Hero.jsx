import React, { useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { Navigate, useNavigate } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const lineLeftRef = useRef(null);
  const lineRightRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const timeline = [
      { ref: lineLeftRef, delay: 0 },
      { ref: subtitleRef, delay: 100 },
      { ref: titleRef, delay: 200 },
      { ref: lineRightRef, delay: 300 },
      { ref: ctaRef, delay: 400 },
      { ref: imageRef, delay: 200 }
    ];

    timeline.forEach(({ ref, delay }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add('animate-in');
        }
      }, delay);
    });
  }, []);
  const navigate =  useNavigate()

  return (
    <div 
      ref={heroRef}
      className="relative flex flex-col sm:flex-row border border-gray-200 overflow-hidden bg-gradient-to-br from-gray-50 to-white min-h-screen"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-900 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Left side - Text content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-20 sm:py-10 px-8 relative z-10">
        <div ref={textRef} className="text-gray-900 max-w-lg">
          
          {/* Top line with subtitle */}
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-6 overflow-hidden">
            <div 
              ref={lineLeftRef}
              className="opacity-0 translate-x-[-100%] transition-all duration-1000 ease-out"
            >
              <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-gray-900"></div>
            </div>
            <p 
              ref={subtitleRef}
              className="text-xs md:text-sm tracking-[0.3em] font-medium text-gray-700 opacity-0 translate-y-4 transition-all duration-800 ease-out"
            >
              OUR BESTSELLERS
            </p>
          </div>

          {/* Main title */}
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            LATEST
            <br />
            <span className="relative inline-block">
              ARRIVALS
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-900 transform scale-x-0 origin-left transition-transform duration-1000 delay-700"></span>
            </span>
          </h1>

          {/* CTA section */}
          <div 
            ref={ctaRef}
            className="flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-800 ease-out group cursor-pointer"
          >
            <p className="text-sm md:text-base font-semibold tracking-wider text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
              SHOP NOW
            </p>
            <div 
              ref={lineRightRef}
              className="opacity-0 translate-x-[-100%] transition-all duration-1000 ease-out"
            >
              <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-gray-900 to-transparent group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div 
        ref={imageRef}
        className="w-full sm:w-1/2 relative overflow-hidden opacity-0 transition-all duration-1200 ease-out"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
        <img 
          src={assets.hero_img}
          alt="Latest Fashion"
          className="w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
        />
        
  
        <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl z-20 animate-float">
          <p onClick={()=>navigate('/collection')} className="text-xs font-semibold tracking-wider cursor-pointer">NEW</p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap');
        
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) translateY(0) !important;
        }

        .animate-in span {
          transform: scaleX(1) !important;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;