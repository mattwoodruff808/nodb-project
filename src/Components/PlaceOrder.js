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

    handleName = (e) => {
        this.setState({nameInput: e.target.value});
    }

    handleType = (e) => {
        this.setState({typeInput: e.target.value});
    }

    handleDrink = (e) => {
        this.setState({drinkInput: e.target.value});
    }

    handleAdd = (e) => {
        e.preventDefault();
        const {nameInput, typeInput, drinkInput} = this.state;
        
        let newPatron = {
            name: nameInput,
            type: typeInput,
            currentDrink: drinkInput
        }
        this.props.addPatronFn(newPatron);
    }

    render(){
        return (
            <form>
                <h1>Place an Order</h1>
                <input value={this.state.nameInput} placeholder='Name' onChange={(e) => this.handleName(e)}/>
                <input value={this.state.typeInput} placeholder='Type' onChange={(e) => this.handleType(e)}/>
                <input value={this.state.drinkInput} placeholder='Drink Order' onChange={(e) => this.handleDrink(e)}/>
                <FindSeat 
                    handleAddFn={this.handleAdd}/>
            </form>
        )
    }
}

export default PlaceOrder;