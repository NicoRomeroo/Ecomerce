/* import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer" */
import { useState } from "react";

function App() {
  const [view, setView] = useState('list')
  return (
    <>
    <div>
    <button onClick={()=> setView("list")}>List</button>
    <button onClick={()=> setView("detail")}>Detail</button>
    <button onClick={()=> setView("cart")}>Cart</button>
    </div>
    {view === "list" ? 
      <div>
        <h1>Lista de productos</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, totam ipsam. Nam atque asperiores, perspiciatis sunt quisquam debitis, consectetur, adipisci magni nobis aut eaque tenetur amet totam est tempore esse!</p>
      </div> 
      : null}
    {view === "detail" ?<div>
        <h1>Detalle del producto</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, totam ipsam. Nam atque asperiores, perspiciatis sunt quisquam debitis, consectetur, adipisci magni nobis aut eaque tenetur amet totam est tempore esse!</p>
      </div>
      : null}
    {view === "cart" ? <div>
        <h1>Carrito de compras</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, totam ipsam. Nam atque asperiores, perspiciatis sunt quisquam debitis, consectetur, adipisci magni nobis aut eaque tenetur amet totam est tempore esse!</p>
      </div>
      : null}
  </>
 /*  /*   
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div> */
  )
}

export default App
