import React, {useState} from 'react';

const Pokemon = () => {
    let [pokeList, setPokeList] = useState([]);
    
    const getData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log("Response from api: ", response);
            setPokeList(response.results);
        }).catch(error => {
            console.log("Sorry, theres an error here!\n", error);
        })
    }

    return(
    <>  
        <div>
            <h1>Pokemon button getter</h1>
            <button onClick={getData}>Fetch 'em all</button>
        </div>
            <h3>List of Pokemon:</h3>
        <div>
        {
            pokeList.map((poke, key) => {
                return (
                    <div key={key}>
                        <li>{poke.name}</li>
                    </div>
                )
            })
        }
        </div>
    </>
    )
}

export default Pokemon