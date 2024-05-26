import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartThunk, totalCartThunk, submitOrderThunk } from "../../redux/cart/cart.slice";
import { useForm } from "react-hook-form";

const CheckOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart } = useSelector((state) => state.carts);
    const { subTotal, tax, total } = useSelector((state) => state.carts);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(getCartThunk());
        dispatch(totalCartThunk());
    }, [dispatch]);

    const onSubmit = async (data) => {
        const {name, address, phone, paymentMethod} = data
        
        const userId = localStorage.getItem('accessToken');

        if (!name || !address || !phone || !paymentMethod) {
            console.error("All fields are required");
            return;
        }

        const orderData = {
            userId,
            items: cart,
            subTotal,
            tax,
            total,
            name,
            address,
            phone,
            paymentMethod
        };
        console.log(orderData);

        try {
            await dispatch(submitOrderThunk(orderData));
            alert('Checkout successful!');
            navigate('/');
            
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    return (
        <main>
            <section className="container signup">
                <div className="content">
                    <h1>Checkout</h1>
                </div>
                <div className="cart">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Item</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
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
                                                    <img src={item.image1} alt={item.name} />
                                                    <div className="overlay">
                                                        <div className="text">
                                                            <img src={item.image2} alt={item.name} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <form className="checkout__form main" onSubmit={handleSubmit(onSubmit)}>
                    <div className="heading">
                        <h2>Enter Your Information</h2>
                    </div>
                    <div className="main--input">
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="First or Last name*"
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                        <input
                            {...register("address", { required: "Address is required" })}
                            type="text"
                            placeholder="Address*"
                        />
                        {errors.address && <p style={{ color: "red" }}>{errors.address.message}</p>}
                        <input
                            {...register("phone", { required: "Phone number is required" })}
                            type="text"
                            placeholder="Number phone*"
                        />
                        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
                        <div className="radio__method">
                            <h2>Payment methods</h2>
                            <div className="radio__method--payment">
                                <span>
                                    <label>
                                        <input {...register("paymentMethod", { required: "Payment method is required" })} type="radio" value="Direct Bank Transfer" />
                                        Direct Bank Transfer
                                    </label>
                                </span>
                                <span>
                                    <label>
                                        <input {...register("paymentMethod")} type="radio" value="Check Payment" />
                                        Check Payment
                                    </label>
                                </span>
                                <span>
                                    <label>
                                        <input {...register("paymentMethod")} type="radio" value="Paypal" />
                                        Paypal
                                    </label>
                                </span>
                                {errors.paymentMethod && <p style={{ color: "red" }}>{errors.paymentMethod.message}</p>}
                            </div>
                        </div>
                        <div className="total">
                            <div className="total__heading">
                                <h2>Total cart</h2>
                            </div>
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
                        </div>
                    </div>
                    <div className="main--button">
                        <button className="button_signin" type="submit">Checkout</button>
                    </div>
                </form>
            </section>
        </main>
    )
}
export default CheckOut;