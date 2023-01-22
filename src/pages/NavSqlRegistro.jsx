import React, { useContext } from 'react'
import { Link, NavLink} from 'react-router-dom'
import {UserContext} from '../provider/UserContext'


export const NavSqlRegistro = () => {
    const {guardado} = useContext(UserContext)

  return (
    <>
        <nav className="navbar navbar-expand-lg" >
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/sql/registrar/registrar-raza'>
                        Animal
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/sql/registrar/registrar-raza'>
                        Raza
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/'>
                        Granja
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/'>
                        Potrero
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