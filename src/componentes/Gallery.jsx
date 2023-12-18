import React,  { useContext } from 'react'
import {PizzaContext} from '../context/PizzaContext'
import PizzaCard from './PizzaCard'

const Gallery = () => {

    const { pizzas } = useContext(PizzaContext);

  return (
    <div className='menu'>
        <div className='tituloMenu'>
            <h1>Menú pizza </h1>
        </div>
        <div className='menuList'>    
            {
            pizzas.map((p) =>{
                return(
               
                    <PizzaCard pizza={p} key={p.id}></PizzaCard>

                )
                
            })
        }
    
        </div>
    </div>
  )
}

export default Gallery