import React from 'react';
import styles from './Text.module.css';

function Text(props) {
  return (
    <p className={styles.pg_text}>{props.text}</p>
  );
}

export default Text;
