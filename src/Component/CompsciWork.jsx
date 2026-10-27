import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import OrbitImages from './OrbitImages'
import './CompsciWork.css'
import cplusplus from  "../assets/apps/cplusplus.webp"
import figma from "../assets/apps/figma.png"
import js from "../assets/apps/js.png"
import pi from "../assets/apps/raspberry_pi.png"
import react from "../assets/apps/react.png"
import ssh from "../assets/apps/ssh.jpg"
import python from "../assets/apps/python.png"
import blender from "../assets/apps/blender.png"


import placeholder_image from "../assets/placeholder_art/art1.jpg"
import workpic_1 from "../assets/project-2/work_pic1.png"
import workpic_2 from "../assets/project-2/sketch.jpg"
import workpic_3 from "../assets/project-2/GUI_test.png"

import noise from "../assets/noise.jpg"
import CloseIcon from '@mui/icons-material/Close';

import { LiaWindowMinimize } from "react-icons/lia";
import { LiaWindowMaximize } from "react-icons/lia";
import { LiaWindowClose } from "react-icons/lia";


// Component created by Dominik Koch
// https://x.com/dominikkoch
// const images = [
//   "https://picsum.photos/300/300?grayscale&random=1",
//   "https://picsum.photos/300/300?grayscale&random=2",
//   "https://picsum.photos/300/300?grayscale&random=3",
//   "https://picsum.photos/300/300?grayscale&random=4",
//   "https://picsum.photos/300/300?grayscale&random=5",
//   "https://picsum.photos/300/300?grayscale&random=6",
// ];

const images = [
  figma,
  js,
  ssh,
  react,
  pi,
  cplusplus
];

const programs_used = [
   python,
   blender
];



function CompsciWork() {
   return (
      <>
         <div className="starter">
            <div className="terminal">
               {/* <h1>hello</h1> */}
               <div className="hotbar">
                  Filename

                  <div className='flex items-center'>
                     <LiaWindowMinimize/>
                     <LiaWindowMaximize />
                     <LiaWindowClose />
                     
                  </div>
               </div>
               <div className="information">
                  <div className="info overflow-hidden"> 
                     <div className="text min-h-0 overflow-y-auto scrollbar-thin overflow-scroll">

                        <h1 className='title'>Project-2: Blender Tour</h1>
                        <h2 className='date'>October 21, 2026</h2>

                        <p className="overflow-clip m-0">
                           Developed an application that is designed to help an expert guide a novice through Blender remotely.
                        </p>

                        <p className="overflow-clip mt-2">
                           My Contribution: Skethced and Developed each Graphical User Interface for expert and novice for communication. Additionally, allowd data transmission of drawing strokes between GUIs.
                        </p>

                        <p className="overflow-clip mt-2 text-blue-600">
                           <Link to= "https://drive.google.com/file/d/1XeAwZ72OU4jkgtmBF5gOS34nHKHWL8Lc/view?usp=sharing"> Demo video 
                           </Link>
                           
                        </p>
                        <p className="overflow-clip mt-2 text-blue-600">
                           <Link to="https://github.com/DarcyNicoleBartolome/project-2"> Source code </Link>
                        </p>
                        
                        {/* <p className="overflow-clip m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                     </div>

                     <div class="inline-block w-auto min-w-[1em] h-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>

                     <div className="orbit">

                        <OrbitImages className=''
                        images={programs_used}
                        shape="ellipse"
                        radiusX={600}
                        radiusY={160}
                        rotation={-30}
                        duration={30}
                        itemSize={250}
                        responsive={true}
                        radius={160}
                        direction="normal"
                        fill
                        showPath
                        paused={false}
                        pathColor='white'
                        baseWidth={1400}
                        />
                     </div>
                  </div>

                  <div class="inline-block h-auto min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>

                  <div className="display-work ">
                     {/* <img className='noise' src={noise}/> */}
                     <CarouselProvider
                        className="work"
                        visibleSlides={1}
                        totalSlides={3}
                        naturalSlideWidth={500}
                        naturalSlideHeight={400}
                        // orientation="horizontal"
                        // hasMasterSpinner
                     >
                        <Slider className=''>
                           <Slide index={0}><ImageWithZoom src={workpic_1} /></Slide>
                           <Slide index={1}><ImageWithZoom src={workpic_2} /></Slide>
                           <Slide index={2}><ImageWithZoom src={workpic_3} /></Slide>
                        </Slider>

                        <div className="split flex justify-evenly">
                           <ButtonBack>Back</ButtonBack>
                           <ButtonNext>Next</ButtonNext>
                        </div>
                     </CarouselProvider>
                     {/* <img className='work' src={workpic_1}/> */}
                  </div>
               </div>
            </div>
         </div>
      </>
      // <div className="container">
      //    <div className="col flex">

      // </div>
   )
}

export default CompsciWork