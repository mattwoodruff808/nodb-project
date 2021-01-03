import {Component} from 'react';
import Header from './Components/Header';
import Hoid from './Components/Hoid';
import PlaceOrder from './Components/PlaceOrder';
import SeatingArea from './Components/SeatingArea';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPatrons: []
    }
  }

  componentDidMount(){
    this.getCurrentPatrons();
  }

  getCurrentPatrons = () => {
    axios.get('/api/patrons')
      .then(res => {
        this.setState({currentPatrons: res.data})
      })
      .catch(err => console.log(err));
  }

  addPatron = (newPatron) => {
    axios.post('/api/patron', newPatron)
      .then(res => {
        this.setState({currentPatrons: res.data})
      })
      .catch(err => console.log(err));
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
          addPatronFn={this.addPatron}/>
        <SeatingArea 
          currentPatrons={currentPatrons}
          switchDrinkFn={this.switchDrink}
          removePatronFn={this.removePatron}/>
      </section>
    )
  }
}

export default App;