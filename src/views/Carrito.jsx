import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PizzaContext } from '../context/PizzaContext'; 

const Carrito = () => {
  const { pizzas, total } = useContext(PizzaContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Detalles del pedido</h2>
      <hr />
      {pizzas.filter((p) => typeof p.cantidad !== 'undefined' && p.cantidad > 0).map((p) => (
            <div key={p.id}>
            <div><img src={p.img} style={{ width: '5vw' }} alt={p.name} /></div>
            <div>{p.name}</div>
            <div>{p.cantidad * p.price}</div>
            <Button variant='danger'>Eliminar</Button>
            <div>{p.cantidad}</div>
            <Button variant='primary'>Incrementar</Button>
          </div>
         ))}
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Total a pagar:</h2>
        <h2>{total}</h2>
      </div>
    </div>
  );
};

export default Carrito;
