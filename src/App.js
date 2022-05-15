import React, { useEffect } from "react";
import Notification from "./components/Notification/Notification";
import Header from "./components/Header/Header";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Products from "./components/Products/Products";
import { useSelector } from "react-redux";
import {sendCartData, fetchCartData} from './store/cart-actions';
import { useDispatch } from "react-redux";

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    name: 'Product 1',
    desc: 'lorem ipsum amet it.',
    price: 6.00,
  },
  {
    id: 'p2',
    name: 'Product 2',
    desc: 'lorem ipsum amet it.',
    price: 9.00,
  },
  {
    id: 'p3',
    name: 'Product 3',
    desc: 'lorem ipsum amet it.',
    price: 14.00,
  },
]

let isInitial = true;

const App = () => {

  const selectedProducts = useSelector(state => state.cart.products);
  const isCartShown = useSelector(state => state.ui.isShown);
  const cartChanged = useSelector(state => state.cart.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cartChanged) {
      dispatch(sendCartData(selectedProducts));
    }
  }, [selectedProducts, dispatch]);

  return (
    <React.Fragment>
    <Notification />
      <Header />
      {isCartShown && <ShoppingCart selectedProducts={selectedProducts} />}
      <Products products={DUMMY_PRODUCTS} />
    </React.Fragment>
  );
}

export default App;
