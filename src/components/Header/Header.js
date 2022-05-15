import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui'
import styles from './Header.module.css';

const Header = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const totalNumberOfAddedProducts = products.length > 0 ? products.map(product => product.amount).reduce((a,b) => a + b) : 0;

  const toggleCartHandler = () => {
    dispatch(uiActions.showCart())
  }

  return (
    <header className={styles.header}>
    <a href="#">KossReduxCart</a>
    <button onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span>{totalNumberOfAddedProducts}</span>
    </button>
    </header>
  )
}

export default Header