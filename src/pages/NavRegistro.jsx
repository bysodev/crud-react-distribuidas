import React, { useContext } from 'react'
import { Link, NavLink} from 'react-router-dom'
import {UserContext} from '../provider/UserContext'


export const NavRegistro = () => {
    const {guardado} = useContext(UserContext)

  return (
    <>
        <nav className="navbar navbar-expand-lg" >
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/registrar/registrar-animal'>
                        Animal
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/registrar/registrar-alimento'>
                        Alimentación
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/registrar/registrar-raza'>
                        Raza
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/registrar/registrar-granja'>
                        Granja
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/registrar/registrar-potreros'>
                        Potreros
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/registrar/registrar-vitales'>
                        Vitalidad
                    </NavLink>
                   
                   
                </ul>
            </div>
        </nav>
        <div>{guardado === 'TOTAL' && <input type="button" className='btn btn-outline-success me-3' value="TOTAL-JSON" />}</div>
        <div>{guardado === 'ANIMAL' && <input type="button" className='btn btn-outline-success me-3' value="ANIMALES-JSON" />}</div>
        <div>{guardado === 'GRANJA' && <input type="button" className='btn btn-outline-success me-3' value="GRANJA-JSON" />}</div>
            
    </>
  )
}