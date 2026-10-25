import OrbitImages from './OrbitImages'
import './CompsciWork.css'
import cplusplus from  "../assets/apps/cplusplus.webp"
import figma from "../assets/apps/figma.png"
import js from "../assets/apps/js.png"
import pi from "../assets/apps/raspberry_pi.png"
import react from "../assets/apps/react.png"
import ssh from "../assets/apps/ssh.jpg"

import placeholder_image from "../assets/placeholder_art/art1.jpg"
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

                        <h1 className='title'>Title</h1>
                        <h2 className='date'>Date</h2>

                        <p className="overflow-clip m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="overflow-clip m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     </div>

                     <div class="inline-block w-auto min-w-[1em] h-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>

                     <div className="orbit">

                        <OrbitImages className=''
                        images={images}
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

                  <div className="display-work bg-[url(../assets/noise.jpg)]">
                     {/* <img className='noise' src={noise}/> */}
                     <img className='work' src={placeholder_image}/>
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