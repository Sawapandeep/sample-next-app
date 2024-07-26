import React from 'react'
import AddToCart from '../AddToCart';
// import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    // <div className={styles.card}>
    //  <div className='p-2 my-1  border-2 rounded-lg border-secondary  hover:border-accent flex md:flex-row flex-wrap'>
    // {/* <div>  */}
    <div className="p-5 my-5 bg-sky-400 text-white text-2xl flex flex-wrap md:flex-nowrap flex-grow flex-shrink-0 hover:bg-sky-600">
      <AddToCart />
      <AddToCart />

    </div>
  )
}

export default ProductCard