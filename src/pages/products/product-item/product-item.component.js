import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../../redux/cart/cart.slice";
const ProductItem = ({ item }) => {

  const dispatch = useDispatch();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      await dispatch(addToCartThunk({ product: { ...item, quantity: 1 }})).unwrap();
      alert("Product added successfully");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="products--items">
      <div className="products--items__img" key={item.id}>
        <Link to={`/product-details/${item.id}`}>
          <img src={item.image1} alt="" />
        </Link>
        <div className="overlay">
          <div className="text">
            <Link to={`/product-details/${item.id}`}>
              <img src={item.image2} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="products--items__main">
        <Link to={`/product-details/${item.id}`}>{item.name}</Link>
        <p>${item.price}</p>
        <button className="border__button" onClick={handleAddToCart} disabled={isAddingToCart} >{isAddingToCart ? "Adding to Cart..." : "Add to Cart"}</button>
      </div>

      <span className="new"></span>
    </div>
  );
};

export default ProductItem;
