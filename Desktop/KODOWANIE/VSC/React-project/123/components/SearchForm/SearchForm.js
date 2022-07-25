import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

// inputy z placeholderami
const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <TextInput placeholder="Add new column" />
            <Button>
              <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

/*
Inputy bez placeholderów

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <input className="input" type="text" />
            <button className={styles.button}>Search</button>
        </form>
    );
  };
*/

  export default SearchForm;