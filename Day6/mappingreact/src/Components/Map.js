import React from 'react';

const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter", "bread"];
    return ( 
        <ul>
            {groceryList.map(item => <li>{item}</li>)}
        </ul>
    ); 
}
    
export default Groceries;