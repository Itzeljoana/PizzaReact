import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';
import { Button } from 'react-bootstrap';

const Detalle = () => {
  const { pizzas } = useContext(PizzaContext);
  const { id } = useParams();

  const index = pizzas.findIndex((p) => p.id === id);
  const pizzasActual = pizzas[index];

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={pizzasActual.img} style={{ width: '30vw' }} alt={pizzasActual.name} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>{pizzasActual.name}</p>
        <p>{pizzasActual.desc}</p>
        <Button>Añadir</Button>
      </div>
    </div>
  );
};

export default Detalle;
