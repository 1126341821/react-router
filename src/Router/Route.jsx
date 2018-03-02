import React from 'react';
import { Router, Route, browserHistory, hashHistory, IndexRoute, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Process from '../page/process';
import Process1 from '../page/process1';
import Process2 from '../page/process2';
import Process3 from '../page/process3';
import Process4 from '../page/process4';
import Process5 from '../page/process5';
import Process6 from '../page/process6';
import ProcessUser from '../page/processUser';

import Table from '../page/table';
import Other from '../page/other';
import Home from '../page/home';
import './index.scss';

export default class Sevenpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Redirect from="/" to="/process/1" />
        <Route path="/" component={Home} >
          {/* <IndexRoute component={Process} /> */}
          <Route path="/process" component={Process} >
            <Route path="/process/1" component={Process1} />
            <Route path="/tao" component={Process4} />
            <Route path="/process/:userName/:id" component={ProcessUser} />
            <Route path="/process/2" component={Process2} />
            <Route path="/process/3" component={Process3} />
            <Route path="/process/4" component={Process4} />
            <Route path="/process/5" component={Process5} />
            <Route path="/process/6" component={Process6} />
          </Route>
          <Route path="/table" component={Table} />
          <Route path="/other" component={Other} />



          <Redirect from="*" to="other" />
        </Route>
      </Router >
    );
  }
}
