
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import Produtos from "./Pages/Produtos"
import Sobrenos from "./Pages/Sobrenos"
import Doces from "./Pages/Doces"
import Defumados from "./Pages/Defumados"
import Queijos from "./Pages/Queijos"
import Geleias from "./Pages/Geleias"
import Biscoitos from "./Pages/Biscoitos"
import Molhos from "./Pages/Molhos"
import Pastas from "./Pages/Pastas"
import Conservas from "./Pages/Conservas"
import Bolos from "./Pages/Bolos"



export default function App() {
 return (
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<HomePage/>} />
  <Route path="/produtos" element={<Produtos />} />
  <Route path="/sobrenos" element={<Sobrenos />} />
  <Route path="/doces" element={<Doces />} />
  <Route path="/defumados" element={<Defumados />} />
  <Route path="/queijos" element={<Queijos />} />
  <Route path="/geleias" element={<Geleias />} />
  <Route path="/biscoitos" element={<Biscoitos />} />
  <Route path="/molhos" element={<Molhos />} />
  <Route path="/pastas" element={<Pastas />} />
  <Route path="/conservas" element={<Conservas />} />
  <Route path="/bolos" element={<Bolos />} />



  
  </Routes>
  </BrowserRouter>
 )
}


