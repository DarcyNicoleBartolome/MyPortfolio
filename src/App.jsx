import { Route, Routes } from "react-router-dom";
import ArtSection from './pages/ArtSection';
import CompSciSection from './pages/CompSciSection';
import Selection from './pages/Selection';
import Homepage from './pages/Homepage';
import './App.css'
import Navbar_placeholder from './Component/Navbar_placeholder'

function App() {
  return (
    <div>
      {/* <Navbar_placeholder/> */}
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/art" element={<ArtSection />} />
        <Route path="/compsci" element={<CompSciSection />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="*" element={<Selection />} />
      </Routes>
    </div>
  )
}

export default App
