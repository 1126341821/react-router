import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Home from './page/home';
import Route from "./Router/Route.jsx";
import store from './redux2/store.js';
// import './utils/setRem';
// import './style/base.css';
import './App.scss';



render(
  <Route />
  ,
  document.querySelector('body')
);




// const renderRoute = Component => {
//   ReactDOM.render(
//     //绑定redux、热加载
//     <Provider store={store()}>
//       <div>dd</div>
//     </Provider>,
//     document.getElementById('root'),
//   )
// }

// renderRoute(Route);