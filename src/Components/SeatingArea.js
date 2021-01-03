import Seat from './Seat';

const SeatingArea = (props) => {
    return (
        <section>
            Seating Area Box!
            <Seat 
                switchDrinkFn={props.switchDrinkFn}
                removePatronFn={props.removePatronFn}/>
        </section>
    )
}

export default SeatingArea;