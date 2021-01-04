import {Component} from 'react';


class Seat extends Component {
    constructor(){
        super();
        this.state = {
            editDrinkInp: '',
            editView: false
        }
    }

    handleDrinkInput = (e) => {
        this.setState({editDrinkInp: e.target.value});
    }

    handleToggleView = () => {
        const {editView} = this.state;
        this.setState({editView: !editView})
    }

    handleSwitchDrink = (id) => {
        this.props.switchDrinkFn(id, this.state.editDrinkInp);
        this.handleToggleView();
        this.setState({editDrinkInp: ''})
    }

    render(){
        const {editDrinkInp, editView} = this.state;
        const {patron, removePatronFn} = this.props;

        return (
            <section>
                <p>Name: {patron.name}</p>
                <p>Ability: {patron.type}</p>
                <p>Drink: {patron.currentDrink}</p>
                {editView 
                ? (
                    <section>
                        <input value={editDrinkInp} 
                               placeholder='Enter New Drink' 
                               onChange={(e) => this.handleDrinkInput(e)}/>
                        <button onClick={() => this.handleSwitchDrink(patron.id)}>Place New Order</button>
                    </section>
                )
                : (
                    <section>
                        <button onClick={() => this.handleToggleView()}>Switch Drink</button>
                    </section>
                )}
                <button onClick={() => removePatronFn(patron.id)}>Bounce Patron</button>
            </section>
        )
    }
}

export default Seat;