import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import { FormVeterinario } from '../hooks/formularios/registro/no-relacionales/FormVeterinario'
import { NavRegistro } from './NavRegistro'


export const Registrar = () => {
  return (
    <>
     <NavRegistro />
    <Routes>
      <Route path='/registrar-Veterinario' element={ <FormVeterinario />} />
      {/* <Route path='/*' element={ <Navigate to='/' /> } /> */}
    </Routes>
    </>
    
  )
}
