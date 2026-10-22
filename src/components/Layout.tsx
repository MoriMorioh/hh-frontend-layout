import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import styles from '../App.module.css';

export const Layout = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
