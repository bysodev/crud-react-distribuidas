import React from 'react'
import { Link, NavLink} from 'react-router-dom'


export const NavEditar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex m-3" >
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                    to='/editar/editar-animal'>
                    Animal
                </NavLink>
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                    to='/editar/editar-raza'>
                    Raza
                </NavLink>
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                    to='/editar/editar-granja'>
                    Granja
                </NavLink>
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                    to='/editar/editar-potreros'>
                    Potreros
                </NavLink>
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                    to='/editar/editar-alimento'>
                    Alimentos
                </NavLink>
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                    to='/editar/editar-vitales'>
                    Vitalidad
                </NavLink>
             
            </ul>
        </div>
    </nav>
  )
}