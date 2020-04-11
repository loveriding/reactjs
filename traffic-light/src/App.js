import React from 'react';
import TrafficLight from './components/TrafficLight';

var trafficStyle = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  black: 'black'
};



class App extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      red: trafficStyle.red, 
      yellow: trafficStyle.black, 
      green: trafficStyle.black,
      next: "yellow"
    }
    setInterval(() => {
    this.changHandle();
    }, 3000);
  }



  changHandle() {
    console.log(this.state.next);
    switch(this.state.next) {
      case "red":
        this.setState({
          red: trafficStyle.red, 
          yellow: trafficStyle.black, 
          green: trafficStyle.black,
          next: "yellow"
        });
        break;
      case "yellow":
        this.setState({
          red: trafficStyle.black, 
          yellow: trafficStyle.yellow, 
          green: trafficStyle.black,
          next: "green"
        });
        break;
      case "green": {
        this.setState({
          red: trafficStyle.black, 
          yellow: trafficStyle.black, 
          green: trafficStyle.green,
          next: "red"
        });
      }
    }
  }


  render() {
    return (
      <div className="App">
        <TrafficLight color = {this.state.red} />
        <TrafficLight color = {this.state.yellow} />
        <TrafficLight color = {this.state.green} />
      </div>
    );
  }
  
  
}


export default App;
