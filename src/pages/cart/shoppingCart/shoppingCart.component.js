import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartThunk, updateCartThunk, totalCartThunk, deleteCartThunk } from "../../../redux/cart/cart.slice";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
    const {subTotal, tax, total} = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(getCartThunk());
    }, [dispatch]);

    useEffect(() => {
        dispatch(totalCartThunk());
    }, [cart])


    function deleteCart(productId) {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            dispatch(deleteCartThunk(productId));
        }
    }

    const updateCart = (productId, quantity) => {
        if (quantity > 0 && quantity <= 100) {
            dispatch(updateCartThunk({ productId, quantity }));
        }
    };

    return (
        <main>
            <section className="container signup ">
                <div className="notification"></div>
                <div className="shopcart">
                    <div className="cart">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Item</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="cart-body">
                                {cart.map((item) => (
                                    <tr key={item.productId}>
                                        <td>{item.productId}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <Link to={`/product-details/${item.productId}`}>
                                                <div className="details--img__main">
                                                    <div className="products--items__img">
                                                        <img src={item.image1} alt="" />
                                                        <div className="overlay">
                                                            <div className="text">
                                                                <img src={item.image2} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                        </td>
                                        <td>${item.price}</td>
                                        <td>
                                            <input type="number" id="quantityInput" min="1" max="100"
                                                onChange={(e) => {
                                                    updateCart(item.productId, parseInt(e.target.value));
                                                }}
                                                value={item.quantity}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => deleteCart(item.productId)}
                                                className="remove"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout">
                        <div className="checkout__totalcart">
                            <ul id="total-cart">
                                <li>
                                    <p>Cart Sub Total :</p>
                                    <span>${subTotal}</span>
                                </li>
                                <li>
                                    <p>Tax :</p>
                                    <span>${tax}</span>
                                </li>
                                <li>
                                    <p>Total :</p>
                                    <span>${total}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="checkout__button">
                            <Link to="/">
                                <button className="btn_back">Back</button>
                            </Link>
                            <button className="btn_checkout" form="form1" type="submit">
                                Check Out
                            </button>
                            <form action="/checkout" id="form1"></form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ShoppingCart;
