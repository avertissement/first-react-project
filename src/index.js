import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App.js';
import STORE from './Data/Store.js';

ReactDOM.render(<App store={STORE} />, document.getElementById('root'));
