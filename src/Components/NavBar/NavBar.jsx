import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
return (
  <nav style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
    <h1>Ecomerce</h1>
    <section>
      <Link to={"/category/Celular"}>Celulares</Link>
      <Link to={"/category/Monitor"}>Monitores</Link>
      <Link to={"/category/Pc"}>Pc</Link>
      <Link to={"/category/Mouse"}>Mouse Gamer</Link>
      <Link to={"/category/Teclado"}>Teclados Gamers</Link>
    </section>
    <CartWidget />
  </nav>
);
}

export default NavBar
