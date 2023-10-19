
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './Pages/Menu'
import HomePage from './Pages/HomePage'


export default function App() {
 return (
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<HomePage/>} />
  <Route path="/menu" element={<Menu />} />
  
  </Routes>
  </BrowserRouter>
 )
}


