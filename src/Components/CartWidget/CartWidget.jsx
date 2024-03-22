import cart from './assets/carrito-de-compras.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" id='cart'/>
            0
        </div>
    )
}

export default CartWidget