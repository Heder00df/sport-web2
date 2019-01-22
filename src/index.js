/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import configureStore from './components/store/configureStore';
import serviceWorker from './serviceWorker';
import routes from './routes';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/css/font-awesome.css';

const rootElement = <Provider store={configureStore()}>
  <Router routes={routes} history={browserHistory} />
</Provider>;

ReactDOM.render(rootElement, document.getElementById('root'));
 serviceWorker();