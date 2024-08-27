import React from 'react'
import AProductos from './pages/aproducto'
import APedido from './pages/apedido'
import AEmpleados from './pages/aempleados'
import Iproducto from './pages/iproducto'
import IEmpleados from './pages/iempleados'
import IPedidos from './pages/ipedidos'
//import Rproductos from './pages/rproductos'
//import RPedidos from './pages/rpedidos'
//import REmpleados from './pages/rproveedores'
//import Login from './pages/login'
//import SingUp from './pages/singUp'
//import Index from './pages/index'
//import Navbar from './components/navbar'
//import Home from './pages/home'

export default function App() {
  return (
    <div>
      <AEmpleados/>
      <IEmpleados/>
      <AProductos />
      <Iproducto/>
      <IPedidos/>
      <APedido/>
    </div>

  

)
}
