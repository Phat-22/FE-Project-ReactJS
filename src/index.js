import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Template from './component/template/template.component';
import HomePage from './pages/home/home.component';
import AboutUs from './pages/about-us/about-us.component';
import Contact from './pages/contact/contact.component';
import ProductList from './pages/products/products.component';
import Cart from './pages/cart/cart.component';
import ProductDetails from './pages/product-details/product-details.component';
import SignInUser from './pages/account/signin.component';
import SignUpUser from './pages/account/signup.component';
import UserComponent from './component/account/user/user.component';
import ShoppingCart from './pages/cart/shoppingCart/shoppingCart.component';
import CheckOut from './pages/checkout/checkout.component';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/product',
        element: <ProductList />
      },
      {
        path: '/brands/:id_brand',
        element: <ProductList />
      },
      {
        path: '/categories/:id_category',
        element: <ProductList />
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />
      },
      {
        path: '/signIn',
        element: <SignInUser />
      },
      {
        path: '/signUp',
        element: <SignUpUser />
      },
      {
        path: '/user',
        element: <UserComponent />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <CheckOut />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
 </Provider>
);

