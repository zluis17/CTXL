import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Sidebar from '../src/components/Sidebar'
import React from 'react'
import Home from '../src/pages/home'
import PerfilDetalle from '../src/pages/perfilDetalle'
import Iproducto from './pages/iproducto'
import IEmpleados from './pages/iempleados'
import IPedidos from './pages/ipedidos'
import Rproductos from './pages/rproductos'
import RPedidos from './pages/rpedidos'
import REmpleados from './pages/rempleados'
//import Login from './pages/login'
//import SingUp from './pages/singUp'
//import Index from './pages/index'
//import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar/>
        <div className="content">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfilDetalle" element={<PerfilDetalle/>}/>
          <Route path="/ipedidos" element={<IPedidos/>}/>
          <Route path="/iproducto" element={<Iproducto/>}/>
          <Route path="/iempleado" element={<IEmpleados/>}/>
          <Route path="/rproductos" element={<Rproductos/>}/>
          <Route path="/rproductos" element={<Rproductos/>}/>
          <Route path="/rpedidos" element={<RPedidos/>}/>
          <Route path="/rempleado" element={<REmpleados/>}/>

          
          </Routes>

          
        </div>
      </div>
    </Router>

  

);
}
export default App