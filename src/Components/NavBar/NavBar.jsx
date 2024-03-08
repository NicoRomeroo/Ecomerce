import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <>
            <h3>Ecommerce</h3>
            <div>
                <button>Monitor</button>
                <button>Pc</button>
                <button>Teclado</button>
                <button>Mouse</button>
            </div>
            <CartWidget />
        </>
    )
}

export default NavBar