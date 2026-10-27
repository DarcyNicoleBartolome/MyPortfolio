import './ArtSection.css';

import { ImageGallery } from 'react-image-grid-gallery';
import 'react-image-grid-gallery/style.css';
import Gallery from '../Component/Gallery'

// Vite turns each matching file into an imported URL.
const artImages = import.meta.glob('../assets/project-1/*.{jpg,jpeg,png,webp,gif}', {
  eager: true,
  import: 'default',
});
const artImages2 = import.meta.glob('../assets/placeholder_art/*.{jpg,jpeg,png,webp,gif}', {
  eager: true,
  import: 'default',
});

function ArtSection() {

  return (
    <div className="p-36">
      {/* <ImageGallery imagesData={imagesData} gapSize={24} /> */}
      <h className="flex m-5">
        Project-1 Works
      </h>
      <Gallery artImages={artImages}/>
      <h className="flex m-5">
        Placeholder Items Below
      </h>
      <Gallery artImages={artImages2}/>
    </div>
  );
}

export default ArtSection;