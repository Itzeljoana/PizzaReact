import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { PizzaContext } from '../context/PizzaContext'; 
import { Button } from 'react-bootstrap';

const Nagavation = () => {
  const navigate = useNavigate();
  const { total } = useContext(PizzaContext);

  const verCarrito = () => {
    navigate('./carrito');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'green' }}>
      <NavLink to='/'>Pizza mama mia</NavLink>
      <div>
        <Button onClick={verCarrito}>Carrito</Button>
        <NavLink to='/carrito'> {/* Cerrando la etiqueta NavLink correctamente */}
          <div>{total}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nagavation;