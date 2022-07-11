import React, {useState} from 'react'
import Styles from './css/styles.module.css'

const Box = () => {
    let [info, setInfo] = useState({
        color: "",
        size: ""
    })
    const {color, size} = info;
    let [boxList, setBoxList] = useState([])
    
    const changeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const createBox = (e) => {
        e.preventDefault();
        const newBox = {
            color: color,
            size: parseInt(size),
        };
        setBoxList([...boxList, newBox])
        setInfo({color: ""})
    };

    return(
        <>
            <form onSubmit={createBox}>
                <div>
                    <label htmlFor="color">Color: </label>
                    <input type="text" onChange={changeHandler} name="color" value={color}></input>
                </div>
                <div>
                    <label htmlFor="size">Size: </label>
                    <input type="text" onChange={changeHandler} name="size" value={size}></input>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
            <div className={Styles.Container}>
            {
                boxList.map((box, i) => {
                    return (
                        <div key={i} style={{backgroundColor: box.color, width: box.size, height: box.size}}></div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Box;