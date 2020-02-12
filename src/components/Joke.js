import React, { Component } from 'react';
import fetch from 'node-fetch';

class Joke extends Component {
    constructor() {
        super();
        this.state = {
            joke: ''
        }
    }

    componentDidMount() {
        fetch('https://45jur1dyqk.execute-api.us-east-1.amazonaws.com/prod/joke')
            .then(res => res.json())
            .then(data => this.setState({joke: data.input}))
            .catch(console.log)
    }

    render() {
        return (
            <h1>{this.state.joke}</h1>
        );
    }
};

export default Joke;