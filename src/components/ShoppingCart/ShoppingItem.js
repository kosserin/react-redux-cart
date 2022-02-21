import React from 'react';
import { useDispatch } from 'react-redux';
import {cartActions} from '../../store/index'
import styles from './ShoppingItem.module.css';

const ShoppingItem = (props) => {

  const dispatch = useDispatch();
  const price = props.price.toFixed(2);

  const addProductHandler = () => {
    dispatch(cartActions.addProduct({
      id: props.id,
      name: props.name,
      desc: props.desc,
      price: props.price,
      amount: 1,
    }))
  }

  const removeProductHandler = () => {
    dispatch(cartActions.removeProduct(props.id))
  }

  return (
    <div className={styles['shopping-item']}>
    <div className={styles.left}>
      <h1>{props.name}</h1>
      <h3>x <span>{props.amount}</span></h3>
    </div>
    <div className={styles.right}>
      <h1>${props.price*props.amount} <span>(${price}/item)</span></h1>
      <div className={styles.buttons}>
      <button onClick={addProductHandler}>+</button>
      <button onClick={removeProductHandler}>-</button>
      </div>
    </div>
    </div>
  )
}

export default ShoppingItem