import React, {useState} from 'react';

const Personcard = props => {
    const [age, setAge] = useState(props.age);

    const addYear = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>{props.last_name}, {props.first_name}</h1>
            <ul>
                <li>Age: {age}</li>
                <li>Hair Color: {props.hair_color}</li>
            </ul>
            <button onClick={addYear}>Birthday Button for {props.first_name} {props.last_name}</button>
        </div>
    );
}

export default Personcard;