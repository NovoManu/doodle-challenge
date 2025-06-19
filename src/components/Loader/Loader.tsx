import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => (
  <div
    className={styles.overlay}
    data-testid="loader"
    role="status"
    aria-live="polite"
    aria-label="Loading"
  >
    <div className={styles.spinner}></div>
  </div>
);

export default Loader;
