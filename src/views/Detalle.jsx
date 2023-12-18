import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';
import { Button } from 'react-bootstrap';
import { CiPizza } from "react-icons/ci";

const Detalle = () => {
  const { pizzas, handleCarrito } = useContext(PizzaContext);
  const { id } = useParams();



  const index = pizzas.findIndex((p) => p.id === id);
  const pizzasActual = pizzas[index];

  return (
    <div className='detalle' >
      <img src={pizzasActual.img} style={{ width: '50', borderRadius:'5px', margin:'20px'}} alt={pizzasActual.name} />
      <div style={{ display: 'flex', flex:'50%', flexDirection: 'column' }}>
        <h1 style={{textTransform: 'uppercase'}}>{pizzasActual.name}</h1>
        <p>{pizzasActual.desc}</p>
        <h4>Ingredientes:</h4>
        <ul>
          {pizzasActual.ingredients.map((ingredient) => (
          <li  style={{listStyle: 'none'}} key={ingredient}><CiPizza /> {ingredient}</li>
          ))}
        </ul>
        <h3>${pizzasActual.price}</h3>

        <Button variant="danger" onClick={() => handleCarrito(pizzasActual)} > Añadir</Button>
      </div>
    </div>
  );
};

export default Detalle;
