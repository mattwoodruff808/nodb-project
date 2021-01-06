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
        if (nameInput === '' || typeInput === '' || drinkInput === ''){
            alert('Please enter Name, Type, and Drink before placing order.')
        } else {
            this.props.addPatronFn(newPatron);
            this.setState({
                nameInput: '',
                typeInput: '',
                drinkInput: ''
            });
        }
    }

    handleKeypress = (e) => {
        if (e.keyCode === 13){
            this.handleAdd();
        }
    }

    render(){
        const {nameInput, typeInput, drinkInput} = this.state;

        return (
            <form className="Place-order">
                <h2>Place an Order</h2>
                <div className="Box">
                    <input value={nameInput} 
                           placeholder='Name' 
                           onChange={(e) => this.handleName(e)} 
                           onKeyPress={(e) => this.handleKeypress(e)}/>
                    <input value={typeInput} 
                           placeholder='Ability' 
                           onChange={(e) => this.handleType(e)} 
                           onKeyPress={(e) => this.handleKeypress(e)}/>
                    <input value={drinkInput} 
                           placeholder='Drink Order' 
                           onChange={(e) => this.handleDrink(e)} 
                           onKeyPress={(e) => this.handleKeypress(e)}/>
                    <FindSeat 
                        handleAddFn={this.handleAdd}/>
                </div>
            </form>
        )
    }
}

export default PlaceOrder;