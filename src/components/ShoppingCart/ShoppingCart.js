import React from 'react';

import ShoppingItem from './ShoppingItem';
import styles from './ShoppingCart.module.css';

const ShoppingCart = (props) => {
  return (
    <div className={styles['shopping-cart']}>
    <h2>Your Shopping Cart</h2>
    {props.selectedProducts.length === 0 ? <p>You didn't select any product. Please select one.</p> : <ul>{props.selectedProducts.map(product => <ShoppingItem key={product.id} id={product.id} name={product.name} desc={product.desc} price={product.price} amount={product.amount} />)}</ul>}
    </div>
  )
}

export default ShoppingCart