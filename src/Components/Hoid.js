import {Component} from 'react';


class Hoid extends Component {
    constructor(){
        super();
        this.state = {
            editStoryInp: '',
            editView: false
        }
    }

    handleStoryInp = (e) => {
        this.setState({editStoryInp: e.target.value})
    }

    handleToggleView = () => {
        const {editView} = this.state;
        this.setState({editView: !editView})
    }

    handleChangeStory = () => {
        const {changeStoryFn} = this.props;

        changeStoryFn(this.state.editStoryInp);
        this.handleToggleView();
        this.setState({editStoryInp: ''});
    }

    render(){
        const {editStoryInp, editView} = this.state;
        const {currentStory} = this.props;

        return (
            <section className="Hoid-sidebar">
                <h2>Bartender</h2>
                <img className="Hoid-margin" src='https://i.pinimg.com/originals/80/ef/91/80ef9128f7171d1172de2dca678bdcc9.png' alt='Hoid playing his flute'/>
                <p className="Artist-2">Artist: Tara Spruit - (taratjah)</p>
                <section className="Hoid-info">
                    <p>Name: Hoid</p>
                    <p>Ability: Everything</p>
                    {editView 
                    ? (
                        <section>
                            <input value={editStoryInp} 
                                placeholder='Enter New Story' 
                                onChange={(e) => this.handleStoryInp(e)}/>
                            <button onClick={() => this.handleChangeStory()}>Begin Story</button>
                        </section>
                    )
                    : (
                        <section className="Click"> 
                            <p onClick={() => this.handleToggleView()}>Story: {currentStory}</p>
                        </section>
                    )}
                </section>
            </section>
        )
    }
}

export default Hoid;