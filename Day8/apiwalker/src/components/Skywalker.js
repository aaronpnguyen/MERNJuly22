import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Skywalker = () => {
    let [apiQuery, setApiQuery] = useState([])
    let [dataKeys, setDataKeys] = useState([])
    let [dataValue, setDataValue] = useState([])
    let [dataQuery, setDataQuery] = useState("")
    let [dataId, setDataId] = useState("1")
    let [submit, setSubmit] = useState(false)

    useEffect(() => {
        console.log("Hey this is changing in useEffect")
        axios.get(`https://swapi.dev/api/`)
        .then(response => {
            setApiQuery(Object.keys(response.data))
        })
        axios.get(`https://swapi.dev/api/${dataQuery}/${dataId}`)
        .then(response => {
            setDataKeys(Object.keys(response.data))
            setDataValue(Object.values(response.data))
            console.log(Object.keys(response.data))
            console.log(Object.values(response.data))
        }).catch(error => {
            console.log("hey error!")
            console.log(error)
            setDataKeys(["Error"])
            setDataValue(["These aren't the droids you're looking for"])
        });
    }, [submit])

    const submitForm = (e) => {
        e.preventDefault()
        setSubmit(!submit)
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <label htmlFor='search'>Search for: </label>
                <select name="query" onChange={e => setDataQuery(e.target.value)}>
                    <option disabled selected>--Select a query---</option>
                    {
                        apiQuery.map((item, i) => {
                            return (
                                <>
                                    {console.log(typeof(item))}
                                    <option key={i} value={item} style={{textTransform: 'capitalize'}}>{item}</option>
                                </>
                            )
                        })
                    }
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" placeholder="id" onChange={e => setDataId(e.target.value)}></input>
                <input type="submit" value="Search!"></input>
                {console.log(`This is what the data query is: ${dataQuery}\nThis is what my id is: ${dataId}`)}
            </form>
            <div>
            </div>
            <div>
                {
                    dataKeys.map((item, i) => {
                        return (
                            <>
                            {console.log(item)}
                            <h3 key={i} style={{textTransform: 'capitalize'}}>{item}: {dataValue[i]}</h3>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Skywalker