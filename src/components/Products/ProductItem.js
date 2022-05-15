import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import styles from './ProductItem.module.css';

const ProductItem = (props) => {

  const price = props.price.toFixed(2);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addProduct({
      id: props.id,
      name: props.name,
      desc: props.desc,
      price: props.price,
      amount: 1,
    }))
  }

  return (
    <li id={props.id} className={styles['product-item']}>
    <div className={styles.left}>
    <h1>{props.name}</h1>
    <p>{props.desc}</p>
    </div>
    <div className={styles.right}>
    <h1>${price}</h1>
    <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
    </li>
  )
}

export default ProductItem