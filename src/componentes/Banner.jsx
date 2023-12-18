import React from 'react'
import { NavLink, useNavigate, } from 'react-router-dom'; 


const Banner = () => {
  return (
    // <div style={{height: '15vh', display:'flex', backgroundColor:'gray'}}>
    <div className='banner' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
      <div className="bannerContainer">
        <NavLink to="/gallery">
          <button> ordena aquí </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Banner