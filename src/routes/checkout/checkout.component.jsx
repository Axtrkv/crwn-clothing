import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartItems.map((item) => {
                return <CheckoutItem key={item.id} product={item} handleAddItem={addItemToCart} handleRemoveItem={removeItemFromCart} handleClearItem={clearItemFromCart}/>
            })}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout