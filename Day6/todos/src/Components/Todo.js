import React, {useState} from 'react'

const Todo = () => {
    let [info, setInfo] = useState({
        todoItem: ""
    })
    let {todoItem} = info;
    let [todoList, setTodoList] = useState([])

    const changeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const createItem = (e) => {
        e.preventDefault();
        const newItem = {
            todoItem,
            finished: false
        }
        setInfo({todoItem: ""})
        setTodoList([...todoList, newItem])
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
                <input type="text" onChange={changeHandler} name="todoItem" value={todoItem}></input>
            </div>
            <input type="submit"></input>
        </form>
        <div>
            {
                todoList.map((todo, key) => {
                    return (
                        <div key={key}>
                            <label htmlFor="todoItem" style={{textDecoration: todo.finished? "line-through": "None"}}>{todo.todoItem}</label>
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

export default Todo