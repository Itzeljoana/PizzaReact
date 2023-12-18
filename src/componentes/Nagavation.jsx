import React, { useContext,  } from 'react';
import { NavLink, useNavigate, } from 'react-router-dom'; 
import { PizzaContext } from '../context/PizzaContext'; 
import { Button } from 'react-bootstrap';
import { LuShoppingCart } from "react-icons/lu"
import { IoMenu } from "react-icons/io5";

const Nagavation = () => {
  const navigate = useNavigate();
  const { total } = useContext(PizzaContext);
 

  const verCarrito = () => {
    navigate('./carrito');
  };

  return (
    <div className='navbar'>
      <div  className='leftSide' >
        <img src = 'https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pizzaLogo.png?raw=true'/>
        <NavLink to='/home'>Pizza Mamma Mia</NavLink>
      </div>
      <div  className='rightSide'>
        <NavLink to='/carrito'>
          <div onClick={verCarrito} ><LuShoppingCart color="white" size={30} /></div>
        </NavLink> 
        <NavLink to='/carrito'> 
          <div>${total}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nagavation;