import React, {useState} from 'react'

const TodoReview = () => {
    let [info, setInfo] = useState("")
    let [todoList, setTodoList] = useState([])


    const createItem = (e) => {
        e.preventDefault();
        const newItem = {
            info,
            finished: false
        }
        //setInfo({todoItem: ""})
        setTodoList([newItem,...todoList])
    }

    const toggleFinish = (e, key) => {
        let copyTodoList = [...todoList]
        copyTodoList[key].finished = e.target.checked
        //copyTodoList[key].finished = !copyTodoList[key].finished;
        setTodoList(copyTodoList)
    }

    const deleteTodo = (e, key) => {
        // Cody's way
        // let copyTodoList = [...todoList]
        // copyTodoList.splice(key, 1)
        // setTodoList(copyTodoList)

        let filteredTodoList = todoList.filter((todo, i) => {
            return i !== key
        })
        setTodoList(filteredTodoList)

        // let [...copyTodoList] = todoList === let copyTodoList = [...todoList]
        // delete copyTodoList[key];
        // console.log([key])
        // setTodoList(copyTodoList)
    }

    return(
        <>
        <form onSubmit={createItem}>
            <div>
                <label htmlFor="todoItem">Your todo item here: </label>
                <input type="text" onChange={(e)=>setInfo(e.target.value)}></input>
            </div>
            <input type="submit"></input>
        </form>
        <div>
            {
                todoList.map((todo, key) => {
                    return (
                        <div key={key}>
                            <label htmlFor="todoItem" style={{textDecoration: todo.finished? "line-through": "None"}}>{todo.info}</label>
                            <input type="checkbox" checked={todo.finished} name="finished" onClick={e => toggleFinish(e, key)}/>
                            <button onClick={e => deleteTodo(e, key)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default TodoReview