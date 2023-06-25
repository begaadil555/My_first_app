import React from 'react'

export default function Navbar(props) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/Home">{props.Title}'s Website</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav nav-underline">
          
      <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/Home">Home</a>
  </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contect">Contect us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social media 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href={props.fb}>Facebook</a></li>
              <li><a className="dropdown-item" href={props.ig}>Instagram</a></li>
              <li><a className="dropdown-item" href={props.twitter}>Twetter</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href={props.tl}>Telegram</a></li>
              <li><a className="dropdown-item" href={props.Whatapp}>What'sApp</a></li>
            </ul>
          </li>
          
        </ul>
        
        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
    </div>
    
  </nav>
  )
}
