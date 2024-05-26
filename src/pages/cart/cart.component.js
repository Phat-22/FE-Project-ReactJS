import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCart from "./shoppingCart/shoppingCart.component";
import { getCartThunk } from "../../redux/cart/cart.slice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.carts.cart);


    useEffect(() => {
        dispatch(getCartThunk())
    }, [dispatch]);

    return (
        <main>
            <section className="container signup ">
                <div className="content">
                    <h1>Shopping Cart</h1>
                </div>
                {cart.length <= 0 ? 
                    <div className="notification">
                        <h1>Oops, Your cart is empty</h1>
                    </div>
                    : 
                    <ShoppingCart />
                }
                <div className="shopcart"> 
                    
                </div>
            </section>
        </main>
    )
}
export default Cart