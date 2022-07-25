/* Główny plik naszej aplikacji, w którym inicjujemy jej działanie */

import ReactDOM from 'react-dom';
import App from './App';
//import scss
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

/* 
Mówimy Reactowi, aby w elemencie o id root została wyrenderowana treść komponentu (funkcji) App 
*/

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

/*
 const App = () => {
  return (
    `<div>
      ${Hero()}
      ${SearchForm()}
    </div>`
  );
};
*/

/* użycie tagu z nazwą o dużej literze, to informacja dla Webpacka, że należy “wywołać” funkcję komponent o takiej nazwie właśnie.

To, co ta funkcja zwróci, jest przekazywane do metody render, a ona, zwróconą treść przypisze do elementu o id root */