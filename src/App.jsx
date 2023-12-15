import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Nagavation from "./componentes/Nagavation"
import Home from "./views/Home"
import Carrito from "./views/Carrito"
import Detalle from "./views/Detalle"
import NotFound from "./views/NotFound"

function App() {
  

  return (
  <BrowserRouter>
    <Nagavation></Nagavation>
    <Routes>
      <Route path = "/" element ={<Home></Home>}></Route>
      <Route path = "/detalle/:id" element ={<Detalle></Detalle>}></Route>
      <Route path = "/carrito" element ={<Carrito></Carrito>}></Route>
      <Route path = "*" element ={<NotFound></NotFound>}></Route>
    </Routes>

  </BrowserRouter>
  )
}

export default App
