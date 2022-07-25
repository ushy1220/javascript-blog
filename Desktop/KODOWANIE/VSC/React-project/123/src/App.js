// App.js jest komponentem głównym, renderującym inne komponenty, które zostały do niego importowane

import Container from '../components/Container/Container';
import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;


