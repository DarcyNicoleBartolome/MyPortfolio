import {useState, React} from 'react';
import './Gallery.css'
import CloseIcon from '@mui/icons-material/Close';

// Vite turns each matching file into an imported URL.
const artImages = import.meta.glob('../assets/placeholder_art/*.{jpg,jpeg,png,webp,gif}', {
  eager: true,
  import: 'default',
});

function Gallery() {
   // let data = [
   //    {
   //       // id: 1,
   //       // imgSrc
   //    }
   // ]

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