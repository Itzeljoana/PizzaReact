import React,  { useContext } from 'react'
import {PizzaContext} from '../context/PizzaContext'
import PizzaCard from './PizzaCard'

const Gallery = () => {

    const { pizzas } = useContext(PizzaContext);

  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
        {
            pizzas.map((p) =>{
                return
                //<div key ={data.id}> {pizza.name}</div>
                <PizzaCard pizza={p} key={p.id}></PizzaCard>
            })
        }

    </div>
  )
}

export default Gallery