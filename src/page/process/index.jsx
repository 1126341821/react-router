import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../header';
import Nav from '../nav';
import './index.scss';

class Process extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className=''>
            <button>
                <Link to='/process/1' >to process1</Link>
            </button>
            process
            {this.props.children}
        </div>
    }
}

export default Process;
