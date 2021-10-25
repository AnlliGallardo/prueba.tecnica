import React from 'react';
import ReactDOM from 'react-dom';
import { Clima } from './Clima';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import {Provider} from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <Clima />
    </Provider>,
  document.getElementById('root')
);

