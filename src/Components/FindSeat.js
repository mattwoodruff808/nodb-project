const FindSeat = (props) => {
    return (
        <section>
            <button onClick={(e) => props.handleAddFn(e)}>Place Order</button>
        </section>
    )
}

export default FindSeat;