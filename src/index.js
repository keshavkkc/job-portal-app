import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./store/configureStore"
import { Provider } from 'react-redux';

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


