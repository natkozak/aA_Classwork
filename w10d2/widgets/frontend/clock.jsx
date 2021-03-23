import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date()
    };

  }

  tick(){
    const tickDate = new Date();
    this.setState({date: tickDate});
  }

  componentDidMount(){

  }

  render(){
    // give the clock a title in an h1 tag and check that this renders correctly on the page
    let hours = this.state[date].getHours();
    let parsed = this.state[date].parse();
    return (
      <h1>Matt and Nat's Cool Clock: {parsed}</h1>
    )
  }
}

export default Clock;

//setInterval should call tick every second
//store interval's id to cancel it in componentWillUnmount. store directly on this.
