import './ArtSection.css';

import { ImageGallery } from 'react-image-grid-gallery';
import 'react-image-grid-gallery/style.css';
import Gallery from '../Component/Gallery'

// Vite turns each matching file into an imported URL.
// const artImages = import.meta.glob('../assets/placeholder_art/*.{jpg,jpeg,png,webp,gif}', {
//   eager: true,
//   import: 'default',
// });


function ArtSection() {

  return (
    <div className="p-36">
      {/* <ImageGallery imagesData={imagesData} gapSize={24} /> */}
      <Gallery/>
    </div>
  );
}

export default ArtSection;