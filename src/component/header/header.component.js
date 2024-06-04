import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesThunk } from "../../redux/products-list/product-list.slice";
import AccountComponent from "../account/account.component";
import UserComponent from "../account/user/user.component";
import { getCurrentUserThunk } from "../../redux/account-user/user.slice";
import { cartNumberThunk } from "../../redux/cart/cart.slice";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { categories: categoryList } = useSelector(
    (state) => state.productList
  );
  const currentUser = useSelector(state => state.accountUser.currentUser);
  const { cart } = useSelector((state) => state.carts);
  const cartNumber = useSelector(state => state.carts.cartNumber)

  const isLoggedIn = currentUser !== null;

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      dispatch(getCurrentUserThunk());
      dispatch(cartNumberThunk());
    }
    dispatch(CategoriesThunk());
  }, [dispatch, cart]);
  
  return (
    <div>
      <header className="header">
        <nav className="header--nav__bottom">
          <div className="mobile--nav__menu">
            <button className="btn__menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ display: "none" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="bottom__logo">
            <Link to="/">
              <img src="/assets/images/logo2.png" alt="logo" />
            </Link>
          </div>
          <div className="bottom__menu">
            <ul>
              <li>
                <Link className="bottom__menu--a" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="bottom__menu--a" to="/product">
                  Products
                </Link>
              </li>
              <li className="bottom__menu--popup">
                <Link className="bottom__menu--a" to="/">
                  Categories
                </Link>
                <div className="hidden popup" id="category">
                  <ul className="category"></ul>
                  {categoryList.map((item) => (
                    <li key={item.id}>
                      <Link to={`/categories/${item.id}`}>{item.category}</Link>
                    </li>
                  ))}
                </div>
              </li>
              <li>
                <Link className="bottom__menu--a" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="bottom__menu--a" to="/about-us">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom__user">
            <ul>
              <li>
                <Link className="bottom__user--a openBtn">
                  <svg
                    xmlns=" http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Link>
              </li>
              <div id="myOverlay" className="overlaySearch">
                <span className="closebtn" title="Close Overlay">
                  ×
                </span>
                <div className="overlay-content">
                  <form action="/action_page.php">
                    <input
                      type="text"
                      placeholder="Search.."
                      name="Bạn đang tìm gì thế?"
                    />
                    <button type="submit">Tìm kiếm</button>
                  </form>
                </div>
              </div>
              {isLoggedIn ? <UserComponent user={currentUser} /> : <AccountComponent />}
              <li className="heart">
                <Link to="#" className="bottom__user--a">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Link>
              </li>
              <li className="cart__box">
                <Link to="/cart" className="bottom__user--a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span id="numbers">{cartNumber}</span>
                </Link>

                <div className="cart__item hidden"></div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="bottom__menu--mobile"></div>
      </header>
    </div>
  );
};

export default HeaderComponent;
