import {
  Heart,
  House,
  MagnifyingGlass,
  ShoppingCartSimple,
  SignIn,
} from 'phosphor-react';
import styles from './FooterBar.module.scss';

export const FooterBar: React.FC = () => {
  return (
    <div className={styles.FooterBar}>
      <div className={styles.Item}>
        <House size={32} color={'white'} />
      </div>
      <div className={styles.Item}>
        <MagnifyingGlass size={32} color={'white'} />
      </div>
      <div className={styles.Item}>
        <ShoppingCartSimple size={32} color={'white'} />
      </div>
      <div className={styles.Item}>
        <Heart size={32} color={'white'} />
      </div>
      <div className={styles.Item}>
        <SignIn size={32} color={'white'} />
      </div>
    </div>
  );
};
