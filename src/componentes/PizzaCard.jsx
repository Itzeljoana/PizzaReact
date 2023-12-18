import React, { useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import {useNavigate, }  from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';


const PizzaCard = ({ pizza }) => {
  const { pizzas, setPizzas, setTotal, handleCarrito } = useContext(PizzaContext);
  const navigate = useNavigate();
  

  const handleDetalle = () => {
    navigate(`/detalle/${pizza.id}`);
  };

  // const handleClick = () => {
  //   const index = pizzas.findIndex((p) => p.id === pizza.id);
  //   console.log(index); 

  //   const pizzasCarrito = [...pizzas];

  //   if (typeof pizzasCarrito[index].cantidad !== 'undefined') {
  //     pizzasCarrito[index].cantidad++;
  //   } else {
  //     pizzasCarrito[index].cantidad = 1;
  //   }
  //   setPizzas(pizzasCarrito);
  //   setTotal((prev) => prev + pizza.price);
  // };
  const handleClick = () => {
    handleCarrito(pizza);
  };


  return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pizza.img} />
  <Card.Body>
    <Card.Title>{pizza.name}</Card.Title>

      {/* <Card.Text>
        {pizza.desc}
      </Card.Text> */}
    <div style={{gap:'10px'}}>
    <Button variant="dark"  style={{marginRight:'10px'}} onClick={handleDetalle}>
            Detalles
          </Button>
          <Button variant="danger" onClick={() => handleClick(pizza)}>
            Añadir
          </Button> 
        
        </div>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;