import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const NavLinks = () => {
  return (
    <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
            <Link className='navbar-brand' to='/' >DISTRIBUIDAS</Link>
            {/* <a className="navbar-brand" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg> + 100
            </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/'>
                        Home
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/registrar'>
                        Registrar
                    </NavLink>
                    <NavLink
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to='/editar'>
                        Editar
                    </NavLink>
                    
                  
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavLinks