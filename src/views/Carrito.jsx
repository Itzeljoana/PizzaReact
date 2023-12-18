import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PizzaContext } from '../context/PizzaContext'; 


const Carrito = () => {
  const { pizzas, total, handleIncrementar, handleDecrementar} = useContext(PizzaContext);

  return (
    <div className='carritoConteiner'>
      <h2>Detalles del pedido</h2>
      <hr />
      {
      pizzas.filter((p) => typeof p.cantidad != 'undefined' && p.cantidad > 0).map((p) => (

        <div  className='carrito' key={p.id}>
            <img src={p.img} alt={p.name} />
            {/* <div><img src={p.img} alt={p.name} /></div> */}
            <div style={{ width: '10%'}}>{p.name}</div>
            <div>${p.cantidad * p.price}</div>
            <Button variant='danger' onClick={() => handleDecrementar(p.id)}>Eliminar</Button>
            <div className='cantidad'><p>{p.cantidad}</p></div>
            <Button variant='primary' onClick={() => handleIncrementar(p.id)}>Incrementar</Button>
        </div>
        ))}
      <hr />
      <div  className='total'>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <h2>Total a pagar:</h2>
          <h2  className='totalH2'>${total}</h2>
        </div>
        <Button variant='success'  size="lg" >Ir a pagar</Button>
      </div>
    </div>
  );
};

export default Carrito;
