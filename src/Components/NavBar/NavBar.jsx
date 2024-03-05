import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Monitor</button>
                <button>Pc</button>
                <button>Teclado</button>
                <button>Mouse</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar