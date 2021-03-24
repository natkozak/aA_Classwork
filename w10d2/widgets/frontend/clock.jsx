import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date()
    };

    this.tick = this.tick.bind(this);

  }

  tick(){
    console.log(this);
    const tickDate = new Date();
    this.setState({date: tickDate});
  }

  componentDidMount(){
    this.tickid = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.tickid);
  }

  render(){
    // give the clock a title in an h1 tag and check that this renders correctly on the page
    let hours = this.state.date.getHours();
    let time = this.state.date.toLocaleTimeString();
    let dayMonthYear = this.state.date.toDateString();
    return (
   
      <div className="clock-header-and-box"> 

        <h1>Matt and Nat's Cool Clock</h1>

        <div className="clock-box">
          <div className="time-box">
            <p className="time-header">Time: </p>
            <p className="time">{time}</p>
          </div>

          <div className="date-box">
            <p className="date-header">Date: </p>
            <p className="date">{dayMonthYear}</p>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default Clock;

//setInterval should call tick every second
//store interval's id to cancel it in componentWillUnmount. store directly on this.
