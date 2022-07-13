import React, {useState} from 'react'
import axios from 'axios'

const Pokemon = () => {
    let [pokeList, setPokeList] = useState([]);
    
    const getData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            console.log("Response from api: ", response);
            setPokeList(response.data.results)
        }).catch(error => {
            console.log("Sorry, theres an error here!\n", error);
        })
    }

    return(
    <>  
        <div>
            <h1>Pokemon button getter</h1>
            <button onClick={getData}>Axios, get 'em all</button>
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