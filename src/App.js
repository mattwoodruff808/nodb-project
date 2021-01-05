import {Component} from 'react';
import Header from './Components/Header';
import Hoid from './Components/Hoid';
import PlaceOrder from './Components/PlaceOrder';
import SeatingArea from './Components/SeatingArea';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPatrons: [],
      currentStory: ''
    }
  }

  componentDidMount(){
    this.getCurrentPatrons();
    this.getCurrentStory();
  }

  //Place Order and Seating Area Functions
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

  switchDrink = (id, newDrink) => {
    axios.put(`/api/patron/${id}`, {newDrink: newDrink})
      .then(res => {
        this.setState({currentPatrons: res.data})
      })
      .catch(err => console.log(err));
  }

  removePatron = (id) => {
    axios.delete(`/api/patron/${id}`)
      .then(res => {
        this.setState({currentPatrons: res.data})
      })
      .catch(err => console.log(err));
  }

  //Hoid Side-Bar Functions
  getCurrentStory = () => {
    axios.get('/api/hoid-story')
      .then(res => {
        this.setState({currentStory: res.data})
      })
      .catch(err => console.log(err));
  }

  changeStory = (newStory) => {
    axios.put('/api/hoid-story', {newStory: newStory})
      .then(res => {
        this.setState({currentStory: res.data})
      })
      .catch(err => console.log(err));
  }

  render(){
    const {currentPatrons, currentStory} = this.state;

    return (
      <section className="App">
        <Header />
        <section className="Content">
          <aside>
            <Hoid 
              currentStory={currentStory}
              changeStoryFn={this.changeStory}/>
          </aside>
          <main>
            <PlaceOrder 
              addPatronFn={this.addPatron}/>
            <SeatingArea 
              currentPatrons={currentPatrons}
              switchDrinkFn={this.switchDrink}
              removePatronFn={this.removePatron}/>
          </main>
        </section>
      </section>
    )
  }
}

export default App;