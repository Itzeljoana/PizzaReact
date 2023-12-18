import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Nagavation from "./componentes/Nagavation"
import Home from "./views/Home"
import Carrito from "./views/Carrito"
import Detalle from "./views/Detalle"
import Gallery from "./componentes/Gallery"
import NotFound from "./views/NotFound"
import Footer from './componentes/Footer'

function App() {
  

  return (
  <BrowserRouter>
    <Nagavation></Nagavation>
    <Routes>
      <Route path = "/home" element ={<Home></Home>}></Route>
      <Route path = "/detalle/:id" element ={<Detalle></Detalle>}></Route>
      <Route path = "/carrito" element ={<Carrito></Carrito>}></Route>
      <Route path = "/gallery" element ={<Gallery></Gallery>}></Route>
      <Route path = "*" element ={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer />

  </BrowserRouter>
  )
}

export default App
