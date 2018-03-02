import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.scss';

const arr = [
  {
  path: '/process',  // 千万不要写 跟目录，不然就一直高亮 
  text: 'processrs'
},
{
  path: '/other',
  text: 'others',
}, {
  path: '/table',
  text: 'table',
}
]

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="navList">
        {
          arr.map((item, index) => {
            return (
              <li className="navItem" key={index} >
                <Link to={item.path} activeClassName="active" >{item.text}</Link>
              </li>);
          })
        }
      </ul>
    );
  }
}

export default Nav;



// {
//   path: '/process1',
//   text: 'Process1'
// }, {
//   path: '/process2',
//   text: 'Process2',
// }, {
//   path: '/process3',
//   text: 'Process3',
// }, {
//   path: '/process4',
//   text: 'Process4'
// }, {
//   path: '/process5',
//   text: 'Process5',
// }, {
//   path: '/process6',
//   text: 'Process6'
// }, 