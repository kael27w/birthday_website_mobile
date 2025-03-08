import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'

// Register Plugins
gsap.registerPlugin(TextPlugin, useGSAP)

function Home() {
    const [visibleCount, setVisibleCount] = useState(1)
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const secondSentenceRef = useRef(null)
    
    const sentences = [
      "Feliz Cumpleaños Mom",
      "Tengo algo para mostrarte :)"
    ]

    // First sentence animation
    useGSAP(() => {
      const chars = gsap.utils.toArray('.char')
      gsap.set(chars, { y: 50, opacity: 0 })
      
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out"
      })
    }, { scope: containerRef }) // scope for better selector handling

    // Second sentence animation
    useGSAP(() => {
      if (visibleCount === 2 && secondSentenceRef.current) {
        gsap.from(secondSentenceRef.current, {
          duration: 2.5,
          text: {
            value: "",
            speed: 0.5,
            chars: "upperAndLowerCase"
          },
          opacity: 0,
          scale: 0.8,
          ease: "back.out"
        })
      }
    }, { 
      scope: containerRef,
      dependencies: [visibleCount] // react to visibleCount changes
    })

    const handleClick = () => {
      if (visibleCount < sentences.length) {
        setVisibleCount(visibleCount + 1)
      } else {
        navigate('/pictures')
      }
    }

    return (
      <div 
        className="flex flex-col min-h-screen cursor-pointer w-full items-center justify-center over-flow-clip" 
        onClick={handleClick}
        ref={containerRef}
      >
        <div className="w-[90%] max-w-[400px] px-8">
          {sentences.slice(0, visibleCount).map((sentence, index) => (
            <p
              key={index}
              ref={index === 1 ? secondSentenceRef : null}
              className="text-4xl font-bold text-customBlue drop-shadow-lg text-center mb-4"
            >
              {index === 0 ? (
                sentence.split('').map((char, charIndex) => (
                  <span 
                    key={charIndex} 
                    className="char inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))
              ) : sentence}
            </p>
          ))}
        </div>
      </div>
    )
}

export default Home