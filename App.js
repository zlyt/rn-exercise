import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import SomeButtons from './components/SomeButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      blue: 100,
      green: 100,
      colourRed: 'rgb(100,0,0)',
      colourBlue: 'rgb(0,0,100)',
      colourGreen: 'rgb(0,100,0)',
    };
  }

  specialPlus = (name, colourCode) => {
    if (name === 'red') {
      let num = colourCode + 10;
      let redCol = `rgb(${num},${0},${0})`;
      this.setState({colourRed: redCol, red: num});
    } else if (name === 'blue') {
      let num = colourCode + 10;
      let blueCol = `rgb(${0},${0},${num})`;
      this.setState({colourBlue: blueCol, blue: num});
    } else {
      let num = colourCode + 10;
      let greenCol = `rgb(${0},${num},${0})`;
      this.setState({colourGreen: greenCol, green: num});
    }
  };

  specialMinus = (name, colourCode) => {
    if (name === 'red') {
      let num = colourCode - 10;
      let redCol = `rgb(${num},${0},${0})`;
      this.setState({colourRed: redCol, red: num});
    } else if (name === 'blue') {
      let num = colourCode - 10;
      let blueCol = `rgb(${0},${0},${num})`;
      this.setState({colourBlue: blueCol, blue: num});
    } else {
      let num = colourCode - 10;
      let greenCol = `rgb(${0},${num},${0})`;
      this.setState({colourGreen: greenCol, green: num});
    }
  };

  render() {
    return (
      <SafeAreaView>
        <SomeButtons
          sumFunction={() => this.specialPlus('red', this.state.red)}
          deductionFunction={() => this.specialMinus('red', this.state.red)}
          color={this.state.colourRed}
        />
        <SomeButtons
          sumFunction={() => this.specialPlus('blue', this.state.blue)}
          deductionFunction={() => this.specialMinus('blue', this.state.blue)}
          color={this.state.colourBlue}
        />
        <SomeButtons
          sumFunction={() => this.specialPlus('green', this.state.green)}
          deductionFunction={() => this.specialMinus('green', this.state.green)}
          color={this.state.colourGreen}
        />
      </SafeAreaView>
    );
  }
}

export default App;
