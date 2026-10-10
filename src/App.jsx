import { Route, Routes } from "react-router-dom";
import ArtSection from './pages/ArtSection';
import CompSciSection from './pages/CompSciSection';
import Selection from './pages/Selection';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Selection />} />
        <Route path="/art" element={<ArtSection />} />
        <Route path="/compsci" element={<CompSciSection />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="*" element={<Selection />} />
      </Routes>
    </div>
  )
}

export default App
