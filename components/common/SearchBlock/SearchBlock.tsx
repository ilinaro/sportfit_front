import { TextInput } from '@mantine/core';
import styles from './SearchBlock.module.scss';

export const SearchBlock: React.FC = () => {
  return (
    <div className={styles.SearchBlock}>
      <TextInput
        placeholder="Поиск"
        classNames={{
          input: styles.Search,
        }}
      />
    </div>
  );
};
