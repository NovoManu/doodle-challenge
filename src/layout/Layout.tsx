import type { FC, PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}