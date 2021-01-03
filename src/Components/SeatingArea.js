import Seat from './Seat';


const SeatingArea = (props) => {
    const mappedPatrons = props.currentPatrons.map((el, i) => {
        return <p key={i}>{el.name} {el.type} {el.currentDrink}</p>
    })

    return (
        <section>
            Seating Area Box!
            {mappedPatrons}
            <Seat 
                switchDrinkFn={props.switchDrinkFn}
                removePatronFn={props.removePatronFn}
                individualPatron={mappedPatrons}/>
        </section>
    )
}

export default SeatingArea;