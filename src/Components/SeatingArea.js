import Seat from './Seat';


const SeatingArea = (props) => {
    const {switchDrinkFn, removePatronFn} = props;
    const mappedPatrons = props.currentPatrons.map((el, i) => (
        <Seat 
            key={i}
            patron={el}
            switchDrinkFn={switchDrinkFn}
            removePatronFn={removePatronFn}/>
    ))

    return (
        <section>
            <h1>Seating Area</h1>
            {mappedPatrons}
        </section>
    )
}

export default SeatingArea;