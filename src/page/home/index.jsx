import React, { Component } from 'react';
import Header from '../header';
import Nav from '../nav';
// import Route from "../../Router/Route.jsx";
import './index.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (<div className="container">
      <Header />
      <div className='contentWrap'>
        <Nav />
        <div className='rightContent'>
          {this.props.children}
        </div>
      </div>
    </div>);
  }
}

export default Home;