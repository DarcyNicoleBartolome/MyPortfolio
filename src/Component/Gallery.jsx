import {useState, React} from 'react';
import './Gallery.css'
import CloseIcon from '@mui/icons-material/Close';


function Gallery({artImages}) {

   const imagesData = Object.entries(artImages).map(([path, src]) => {
      const filename = path.split('/').pop().replace(/\.[^.]+$/, '');
      const img = new Image();
      img.src = src;

      return {
         id: path,
         alt: filename,
         caption: filename,
         imgSrc: img.src

      };
   });

   const [model, setModel] = useState(false);
   const [tempimgSrc, setTempImgSrc] = useState(' ');
   const getImg = (imgSrc) => {
      setTempImgSrc(imgSrc);
      setModel(true)
   }

   return(
      <>
         <div className={model ? "model open" : "model"}>
            <div className="description flex flex-col">
               <h1> Project-1 </h1>
               <h> Developed a website focused on button components that represent the team dynamics </h>
               <h> My Contribution: Hand-drew fire and wind animations and illustrated the campfire background </h>
               <h> Live Demo: https://justice-olson.github.io/CPSC-581---Project-1/ </h>
            </div>
            <img src={tempimgSrc}/>
            <CloseIcon onClick={() => setModel(false)}/>
         </div>
         <div className="gallery">
            {
            imagesData.map((item,index)=>
               {
                  return(
                     <div className="pictures" key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img className='w-full' 
                        src={item.imgSrc}/>
                     </div>
                  )
               })

            }
         </div>
      </>

   )
}

export default Gallery;