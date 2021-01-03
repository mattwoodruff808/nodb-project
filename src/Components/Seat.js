import {Component} from 'react';

class Seat extends Component {
    constructor(){
        super();
        this.state = {
            editDrinkInp: '',
            editView: 'Not sure what goes here'
        }
    }

    render(){
        return (
            <section>
                Seat!
            </section>
        )
    }
}

export default Seat;