import React, {Component} from 'react'

class Card extends Component {
    render() {
        const {last_name, first_name, age, hair_color} = this.props;
        return (
            <div>
                <h1>{last_name}, {first_name}</h1>
                <ul>
                    <li>Age: {age}</li>
                    <li>Hair Color: {hair_color}</li>
                </ul>
            </div>
        )
    }
}

export default Card;