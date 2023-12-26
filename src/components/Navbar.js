import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{props.contactText}</Link>
                            </li>
                        </ul>

                        {/* <div className="d-flex">
                            <button type='button' onClick={() => props.toggleMode('primary')} className="btn btn-outline-primary mx-2">Blue Mode</button>
                            <button type='button' onClick={() => props.toggleMode('danger')} className="btn btn-outline-danger mx-2">Red Mode</button>
                            <button type='button' onClick={() => props.toggleMode('success')} className="btn btn-outline-success mx-2">Green Mode</button>
                            <button type='button' onClick={() => props.toggleMode('dark')} className="btn btn-outline-dark mx-2">Dark Mode</button>
                            <button type='button' onClick={() => props.toggleMode('light')} className="btn btn-outline-light mx-2">Light Mode</button>
                        </div> */}

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar