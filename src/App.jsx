import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ArtSection from './pages/ArtSection';
import CompSciSection from './pages/CompSciSection';
import Selection from './pages/Selection';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Enable multiple pages */}
      <Routes>
        <Route path="/" element={<div>Welcome to the Home page fnrjkvnbtkb</div>} />
        <Route path="/art" element={<ArtSection />} />
        <Route path="/compsci" element={<CompSciSection />} />
        <Route path="/selection" element={<Selection />} />
      </Routes>
    </div>
  )
}

export default App
