import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppTwo from './Components/AppTwo.jsx';
import List from './Components/List.jsx';

//redux start
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './Redux/reducer';
const store = createStore(reducer, composeWithDevTools(applyMiddleware()));
//redux end

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <List />
      <App />
      <AppTwo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
