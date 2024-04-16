import './App.css'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {CartProvider} from './context/CartContext'
import { NotificationProvider } from './context/Notification'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greetings={"Listado de Productos"} />
                }
              />
              <Route
                path="/category/:categoryId"
                element={
                  <ItemListContainer
                    greetings={"Listado de Productos filtrados"}
                  />
                }
              />
              <Route
                path="/detail/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
