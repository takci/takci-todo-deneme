import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editTodo } from "../stores/todo"


export default function EditTodo({data, close}) {


    const dispatch = useDispatch()
    const [todo, setTodo] = useState(data.title)
    const [done, setDone] = useState(data.done)

    const submitHandle = e => {
        e.preventDefault()
        dispatch(editTodo({
            id: data.id,
            title: todo,
            done
        }))
        close()
    }
    return(
        <div>

            <form onSubmit={submitHandle}>

                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} /> <br/>
                <pre>{JSON.stringify(data,null,2)}</pre>
                <label>
                    <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />
                    It is done checkedassign
                </label> <br/>
                <button type="submit">Kaydet</button>
            </form>
            <button type="button" onClick={close}>Kapat</button>
        </div>
    )
}