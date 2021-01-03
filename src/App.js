import {Component} from 'react';
import Header from './Components/Header';
import Hoid from './Components/Hoid';
import PlaceOrder from './Components/PlaceOrder';
import SeatingArea from './Components/SeatingArea';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPatrons: []
    }
  }

  componentDidMount(){

  }

  getCurrentPatrons = () => {

  }

  findSeat = () => {

  }

  switchDrink = () => {

  }

  removePatron = () => {

  }

  render(){
    const {currentPatrons} = this.state;

    return (
      <section>
        <Header />
        <Hoid />
        <PlaceOrder 
          currentPatrons={currentPatrons}
          findSeatFn={this.findSeat}/>
        <SeatingArea 
          currentPatrons={currentPatrons}
          switchDrinkFn={this.switchDrink}
          removePatronFn={this.removePatron}/>
      </section>
    )
  }
}

export default App;