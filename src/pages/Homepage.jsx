import { useState, useRef, useEffect, React } from 'react'
import '../pages/Homepage.css'
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


// Use this for safari alpha videos --> https://alphavids.io
import placeholder_animate_safari from '../assets/placeholder_art/wind_transparent_mockup.mp4'
import placeholder_animate_firefox from '../assets/placeholder_art/wind_transparent_mockup.webm'

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = navigator.userAgent.indexOf("Safari") > -1;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


import Navbar from '../Component/Navbar_placeholder';

function Homepage() {


   const navigate = useNavigate();
   const handleSeeWork = () => {
      navigate("/selection");
   };

   const sectionRef = useRef(null);
   const videoRef = useRef(null);

   useGSAP(
      (_, contextSafe) => {
         const section = sectionRef.current;
         const video = videoRef.current;

         if (!section || !video) return;

         let tween;

         const setupAnimation = contextSafe(() => {
         if (!Number.isFinite(video.duration) || video.duration <= 0) {
            return;
         }

         // Remove an earlier instance if metadata fires again.
         tween?.kill();

         video.pause();
         video.currentTime = 0;

         tween = gsap.to(video, {
            currentTime: video.duration,
            ease: "none",
            scrollTrigger: {
               trigger: section,
               start: "top top",
               end: "+=2500",
               pin: true,
               scrub: 0.5,
               invalidateOnRefresh: true,
            },
         });

         ScrollTrigger.refresh();
         });

         if (video.readyState >= 1) {
         setupAnimation();
         } else {
         video.addEventListener("loadedmetadata", setupAnimation);
         }

         return () => {
         video.removeEventListener("loadedmetadata", setupAnimation);
         };
      },
      { scope: sectionRef }
   );


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

         <div className="captions flex flex-col">
            <h1 className='title'>Title Here</h1>
            <span className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
         </div>
         <Link to="/selection" className='justify-center text-6xl border-amber-50 border rounded-4xl p-8 inline-flex items-center gap-2'> See My Works </Link> 


         {/* Testing Scroll Animation */}
         <section ref={sectionRef} className="scroll-video-section">
            <video
            ref={videoRef}
            className="scroll-video"
            src={placeholder_animate_safari}
            muted
            playsInline
            preload="auto"
            />
         </section>
         
      </>
   )
}

export default Homepage
