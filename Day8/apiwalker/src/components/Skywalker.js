import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Skywalker = () => {
    let [apiQuery, setApiQuery] = useState([])
    let [data, setData] = useState("")
    let [dataId, setDataId] = useState("0")
    let [submit, setSubmit] = useState(false)

    useEffect(() => {
        console.log("Hey this is changing in useEffect")
        axios.get(`https://swapi.dev/api/`)
        .then(response => {
            setApiQuery(Object.keys(response.data))
            console.log(response.data)
            console.log(Object.keys(response.data))
        })
        axios.get(`https://swapi.dev/api/${data}/${dataId}`)
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        });
    }, [submit])

    const submitForm = (e) => {
        e.preventDefault()
        setSubmit(!submit)
        console.log(`This is what the data query is: ${data}\nThis is what my id is: ${dataId}`)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <label htmlFor='search'>Search for: </label>
                <select name="query" onChange={e => setData(e.target.value)}>
                    <option disabled selected>--Select a query---</option>
                    {
                        apiQuery.map((item, i) => {
                            return (
                                <>
                                    {console.log(typeof(item))}
                                    <option value={item}>{item}</option>
                                </>
                            )
                        })
                    }
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" placeholder="id" onChange={e => setDataId(e.target.value)}></input>
                <input type="submit" value="Search!"></input>
                {console.log(`This is what the data query is: ${data}\nThis is what my id is: ${dataId}`)}
            </form>
        </>
    )
}

export default Skywalker