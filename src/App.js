
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import Produtos from "./Pages/Produtos"
import Sobrenos from "./Pages/Sobrenos"


export default function App() {
 return (
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<HomePage/>} />
  <Route path="/produtos" element={<Produtos />} />
  <Route path="/sobrenos" element={<Sobrenos />} />
  
  </Routes>
  </BrowserRouter>
 )
}


