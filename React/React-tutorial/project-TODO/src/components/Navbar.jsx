import React from 'react'
import todoLogo from '../assets/todo-icon.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary py-4">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="#">
            <img src={todoLogo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
            <span >TODO</span>
          </a>
        </div>
      </nav>
    </>
  )
}
export default Navbar
