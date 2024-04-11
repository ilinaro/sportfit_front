import { TextInput } from '@components';
import styles from './SearchBlock.module.scss';
import { MagnifyingGlass } from 'phosphor-react';

export const SearchBlock: React.FC = () => {
  return (
    <div className={styles.SearchBlock}>
      <TextInput
        name={'search'}
        placeholder={'Поиск'}
        className={styles.Search}
        rightSection={<MagnifyingGlass size={22} color="#23272a" />}
      />
    </div>
  );
};
