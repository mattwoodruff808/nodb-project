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
        <section className="Seating-area">
            <h2>Seating Area</h2>
            <section className="Box">
                {/* <section className="Patron-flex"> */}
                    {mappedPatrons}
                {/* </section> */}
            </section>
        </section>
    )
}

export default SeatingArea;