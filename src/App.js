import React, {useState} from "react";
import Header from "./components/Header/Header";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Products from "./components/Products/Products";
import { useSelector } from "react-redux";

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

const App = () => {

  const selectedProducts = useSelector(state => state.products);
  const isCartShown = useSelector(state => state.isShown)

  return (
    <React.Fragment>
      <Header />
      {isCartShown && <ShoppingCart selectedProducts={selectedProducts} />}
      <Products products={DUMMY_PRODUCTS} />
    </React.Fragment>
  );
}

export default App;
