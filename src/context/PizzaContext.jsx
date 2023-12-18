import { createContext, useState, useEffect} from "react";


export  const PizzaContext = createContext({});

const PizzaContextProvider = ({children}) =>{

    const [pizzas, setPizzas] = useState([]);
    const [total, setTotal] = useState(0);

    const url = './pizzas.json';

    const getData = async () =>{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setPizzas ([...data]); // para que funcione los arreglos en todas partes    
    }

    useEffect(() => { // se ejecuta cuando se crea y termina componente
        getData();
    }, [])

    const handleIncrementar = (id)=>{
        setPizzas((prevPizzas)=>
        prevPizzas.map((pizza)=>
          pizza.id === id ? {...pizza, cantidad: pizza.cantidad + 1}: pizza
          )
        )
        setTotal((prevTotal)=> prevTotal + pizzas.find((pizza)=> pizza.id === id).price);
    };
    
    const handleDecrementar = (id)=>{
        setPizzas((prevPizzas)=>
        prevPizzas.map((pizza)=>
          pizza.id === id ? {...pizza, cantidad: pizza.cantidad - 1}: pizza
          )
        )
        setTotal((prevTotal)=> prevTotal - pizzas.find((pizza)=> pizza.id === id).price);
    };

    const handleCarrito = (pizza) => {
        const index = pizzas.findIndex((p) => p.id === pizza.id);
        console.log(index); 
    
        const pizzasCarrito = [...pizzas];
    
        if (typeof pizzasCarrito[index].cantidad !== 'undefined') {
          pizzasCarrito[index].cantidad++;
        } else {
          pizzasCarrito[index].cantidad = 1;
        }
        setPizzas(pizzasCarrito);
        setTotal((prev) => prev + pizza.price);
      };
 
    

    return(
    <PizzaContext.Provider value={{pizzas, setPizzas, total, setTotal, handleIncrementar, handleDecrementar, handleCarrito}} >
        {children}
    </PizzaContext.Provider>
    )

}
export default PizzaContextProvider
