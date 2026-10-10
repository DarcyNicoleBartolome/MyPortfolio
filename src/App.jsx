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
        <Route path="/MyPortfolio/" element={<div>Welcome to the Home page</div>} />
        <Route path="/MyPortfolio/art" element={<ArtSection />} />
        <Route path="/MyPortfolio/compsci" element={<CompSciSection />} />
        <Route path="/MyPortfolio/selection" element={<Selection />} />
      </Routes>
    </div>
  )
}

export default App
