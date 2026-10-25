import { useState, useRef, useEffect } from 'react'
import '../pages/Homepage.css'
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {Video} from '@remotion/media';
import {staticFile} from 'remotion';

// import placeholder_animate from '../assets/placeholder_art/wind_transparent_mockup.webm'
import placeholder_animate from '../assets/placeholder_art/spark.mp4'
// import placeholder_animate from '../assets/placeholder_art/sparktest.png'

gsap.registerPlugin(ScrollTrigger);

import Navbar from '../Component/Navbar_placeholder';

function Homepage() {

   const sectionRef = useRef(null);
   const videoRef = useRef(null);

   useEffect(() => {
      const video = videoRef.current;
      const section = sectionRef.current;
      if (!video || !section) return;

      let ctx;

      const setup = () => {
         ctx = gsap.context(() => {
         gsap.to(video, {
            currentTime: video.duration,
            ease: "none",
            scrollTrigger: {
               trigger: section,
               start: "top top",
               end: "+=2000", // scroll distance for the full video
               scrub: true,
               pin: true,
            },
         });
         }, section);
      };

      if (video.readyState >= 1) {
         setup();
      } else {
         video.addEventListener("loadedmetadata", setup, { once: true });
      }

      return () => {
         video.removeEventListener("loadedmetadata", setup);
         ctx?.revert();
      };
   }, []);




   return (
      <>
         <Navbar/>
         <div className="home-container">
            <div className="header-title">
               <span className="personal">Personal</span>
               <h1 className='portfolio'>
                  <span className="tracking-tight">P</span>
                  <span className="normal">ORTF</span>
                  <span className="tracking-wider">O</span>
                  <span className="normal">LIO</span>
               </h1>
            </div>
         </div>

         <div className="captions m">
            <h1 className='title'>Title Here</h1>
            <span className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
         </div>
         <section ref={sectionRef} className="scroll-video">
            {/* <Video src={staticFile(placeholder_animate)} style={{
               width: '100%',
               height: 'auto',
               objectFit: 'contain',
            }}/> */}
            <video
            // style={{ backgroundColor: 'transparent' }}
               ref={videoRef}
               src={placeholder_animate}
               muted
               playsInline
               preload="auto"
               />
            {/* {/* <img ref={videoRef} src={placeholder_animate} alt="Animated image" width="400" muted
            playsInline
            preload="auto"></img> */}
         </section>
      </>
   )
}

export default Homepage
