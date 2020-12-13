import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configStore from './store';

const store = configStore();

const renderContainer = Component => {
  const root = document.getElementById('root');

  const Application = (
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  );

  render(Application, root);
};

renderContainer(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
