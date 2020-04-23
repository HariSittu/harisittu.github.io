import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "Hariharan Vinayagam",
    };

    this.content = this.content.bind(this)
  };

  componentDidMount() {  }
  componentWillUnmount() {  }

  render() {
    return(
      <div className="home">
        <h1>Hariharan</h1>
        <h2>I am a full stack developer in Chennai.</h2>
      </div>
    )
  };
}

export default Content;
