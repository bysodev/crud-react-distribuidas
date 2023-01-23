import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import {NavLinks} from './pages/Navbar'
import { Registrar } from './pages/Registrar'
import { Editar } from './pages/Editar'
import Home from './pages/Home'
import { NavRegistro } from './pages/NavRegistro'
import { NavEditar } from './pages/NavEditar'
import { UserProvider } from './provider/UserProvider'

import { FormPotrero } from './hooks/formularios/registro/relacionales/FormPotrero'
import { FormGranja } from './hooks/formularios/registro/relacionales/FormGranja'
import { FormAnimal } from './hooks/formularios/registro/relacionales/FormAnimal'
import { FormRaza } from './hooks/formularios/registro/relacionales/FormRaza'
import { FormVeterinario } from './hooks/formularios/registro/no-relacionales/FormVeterinario'

import { FormPotreroEdit } from './hooks/formularios/edicion/relacionales/FormPotrero'
import { FormGranjaEdit } from './hooks/formularios/edicion/relacionales/FormGranja'
import { FormAnimalEdit } from './hooks/formularios/edicion/relacionales/FormAnimal'
import { FormRazaEdit } from './hooks/formularios/edicion/relacionales/FormRaza'
import { FormVitalidadEdit } from './hooks/formularios/edicion/no-relacionales/FormVitalidad'
import { FormAlimento } from './hooks/formularios/registro/relacionales/FormAlimento'
import { FormAlimentoEdit } from './hooks/formularios/edicion/relacionales/FormAlimento'
import { FormVitalidad } from './hooks/formularios/registro/no-relacionales/FormVitalidad'

function App() {

  const SqlRoutes = () => {

  }
  const NoSqlRoutes = () => {
    
  }
  const RegisterRoutes = () => (
    <>
      <NavRegistro/>
      <Routes>
          {/* <Route path="/" element={FormVeterinario} /> */}
          <Route path="/registrar-vitales" element={<FormVitalidad />} />
          <Route path="/registrar-potreros" element={<FormPotrero />} />
          <Route path="/registrar-animal" element={<FormAnimal />} />
          <Route path="/registrar-alimento" element={<FormAlimento />} />
          <Route path="/registrar-granja" element={<FormGranja />} />
          <Route path="/registrar-raza" element={<FormRaza />} />
          {/* <Route path="tournaments" element="Tournaments" /> */}
      </Routes>
    </>
  );
  const EditRoutes = () => (
    <>
      <NavEditar/>
      <Routes>
          <Route path="/editar-vitales" element={<FormVitalidadEdit />} />
          <Route path="/editar-potreros" element={<FormPotreroEdit />} />
          <Route path="/editar-animal" element={<FormAnimalEdit />} />
          <Route path="/editar-granja" element={<FormGranjaEdit />} />
          <Route path="/editar-raza" element={<FormRazaEdit />} />
          <Route path="/editar-alimento" element={<FormAlimentoEdit />} />
      </Routes>
    </>
  );

  return (
    <>
     <UserProvider >
      <NavLinks />

    <div className='d-flex justify-content-center flex-column'>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/registrar/*' element={ <RegisterRoutes />} />
        <Route path='/editar/*' element={ <EditRoutes />} />
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </div>
    

     </UserProvider>
     
    </>
  )

  
}

export default App
