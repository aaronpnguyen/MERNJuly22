import React, {Component} from 'react'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    addYear = () => {
        this.setState({age: this.state.age + 1})
    }

    render() {
        const {last_name, first_name, hair_color} = this.props;
        return (
            <div>
                <h1>{last_name}, {first_name}</h1>
                <ul>
                    <li>Age: {this.state.age}</li>
                    <li>Hair Color: {hair_color}</li>
                </ul>
                <button onClick={this.addYear}>Birthday Button for {first_name} {last_name}</button>
            </div>
        )
    }
}

export default Card;