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
        const {individualPatron} = this.props.individualPatron;

        return (
            <section>
                {individualPatron}
            </section>
        )
    }
}

export default Seat;