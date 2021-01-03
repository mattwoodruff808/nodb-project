import {Component} from 'react';
import FindSeat from './FindSeat';

class PlaceOrder extends Component {
    constructor(){
        super();
        this.state = {
            nameInput: '',
            typeInput: '',
            drinkInput: ''
        }
    }

    handleInputs = (e) => {
        
    }

    render(){
        return (
            <section>
                <h1>Place an Order</h1>
                <input placeholder='Name'/>
                <input placeholder='Type'/>
                <input placeholder='Drink Order'/>
                <FindSeat 
                    findSeatFn={this.props.findSeatFn}/>
            </section>
        )
    }
}

export default PlaceOrder;