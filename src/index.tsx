import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Store from './store/store';

interface State {
  store: Store
}

export const store = new Store();

export const Context = createContext<State>({
  store
});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{store}}>
    <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
