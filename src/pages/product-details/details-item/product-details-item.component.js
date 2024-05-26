import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../../redux/cart/cart.slice";

const DetailsItem = ({ item }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const handleAddToCart = async () => {
        setIsAddingToCart(true);
        try {
            await dispatch(addToCartThunk({ product: { ...item, quantity: quantity }})).unwrap();
            alert("Product added successfully");
        } catch (error) {
            console.error("Error adding product to cart:", error);
        } finally {
            setIsAddingToCart(false);
        }
    };
    return (
        <div key={item.id} id="details">
            <div  className="section--right__details">
                <div className="details--img">
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

                    <div className="details--img__slide">
                        <img src={item.image1} alt="rings" />
                        <img src={item.image2} alt="rings" />
                    </div>
                </div>
                <div className="details--info">
                    <h1>{item.name}</h1>
                    <p>
                        <strong>Price:</strong> ${item.price}{" "}
                    </p>
                    <p>
                        <strong>Status:</strong> {item.status}
                    </p>
                    <p>
                        <strong>Color: </strong>
                        <select className="size">
                            {item.color.map(val => (
                                <option value={val}>{val}</option>
                            ))};
                        </select>
                    </p>
                    <div className="quantity__addtocart">
                        <input
                            className="quantity"
                            type="number"
                            min="1"
                            max="10"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                        <button id="cart" className="border__button radius" onClick={() => handleAddToCart(item)} disabled={isAddingToCart}>
                            {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                        </button>
                    </div>
                    <p>
                        <strong>Category: </strong> {item.category}
                    </p>
                    <p>
                        <strong>Brand: </strong> {item.brand}
                    </p>
                </div>
            </div>
            <div className="details--info__table">
                <div className="h2_Details">
                    <h2>Description</h2>
                    <div className="table__details" style={{ fontSize: '1.5rem' }}>
                        {item.description}
                    </div>
                </div>
                <div className="h2_Details">
                    <h2>Details</h2>
                </div>
                <div className="table__details">
                    <table>
                        <tbody>
                            <tr>
                                <td className="bold">Brand:</td>
                                <td>{item.brand}</td>
                            </tr>
                            <tr>
                                <td className="bold">Color:</td>
                                <td>
                                    {item.color.join(' / ')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default DetailsItem;