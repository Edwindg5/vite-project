import React from 'react';
import Text from '../atoms/Text';
import haloData from '../../data/haloData';
import styles from './Grid.module.css';

function Grid() {
  return (
    <div className={styles.grid}>
      {haloData.products.map((product, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={`/src/assets/images/${product.image}`} alt={product.text} className={styles.image} />
          <Text text={product.text} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
