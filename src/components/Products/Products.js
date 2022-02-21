import React from 'react';

import ProductItem from './ProductItem';
import styles from './Products.module.css';

const Products = (props) => {
  return (
    <div className={styles['products-section']}>
    <h2>BUY YOUR FAVORITE PRODUCTS</h2>
    <ul className={styles.products}>
      {props.products.map(product => <ProductItem key={product.id} id={product.id} name={product.name} desc={product.desc} price={product.price} />)}
    </ul>
    </div>
  )
}

export default Products