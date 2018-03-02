import React, { Component } from 'react';
import { Link } from 'react-router';


class Process1 extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(event) {
        event.preventDefault()
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/${userName}/${repo}`;
        console.log('http://127.0.0.1:8088/#/process' + path);
        location.href = 'http://127.0.0.1:8088/#/process' + path;
    }

    render() {
        return <div style={{ background: 'yellow' }}>
            <button>
                <Link to="/process/taoyizhen/1">params</Link>
            </button>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="userName" /> / {' '}
                <input type="text" placeholder="repo" />{' '}
                <button type="submit">Go</button>
            </form>
            process1
            </div>
    }
}

export default Process1;