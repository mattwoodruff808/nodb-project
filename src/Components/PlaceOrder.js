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
        this.setState({
            nameInput: '',
            typeInput: '',
            drinkInput: ''
        })
    }

    render(){
        const {nameInput, typeInput, drinkInput} = this.state;

        return (
            <form>
                <h2>Place an Order</h2>
                <div className="Box">
                    <input value={nameInput} placeholder='Name' onChange={(e) => this.handleName(e)}/>
                    <input value={typeInput} placeholder='Ability' onChange={(e) => this.handleType(e)}/>
                    <input value={drinkInput} placeholder='Drink Order' onChange={(e) => this.handleDrink(e)}/>
                    <FindSeat 
                        handleAddFn={this.handleAdd}/>
                </div>
            </form>
        )
    }
}

export default PlaceOrder;