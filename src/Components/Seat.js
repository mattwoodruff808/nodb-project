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
    }

    render(){
        const {patron, switchDrinkFn, removePatronFn} = this.props;

        return (
            <section>
                <p>Name: {patron.name}</p>
                <p>Ability: {patron.type}</p>
                <p>Drink: {patron.currentDrink}</p>
                <button>Switch Drink</button>
                <button>Bounce Patron</button>
            </section>
        )
    }
}

export default Seat;