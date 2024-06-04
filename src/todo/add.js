import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { addTodoHandle } from '../utils'
import { modal } from '../utils'

export default function AddTodo() {

    const {user} = useSelector(state => state.auth)
    const [todo, setTodo] = useState('')
    
    const submitHandle = e => {
        e.preventDefault()
        addTodoHandle({
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id 
        })
        setTodo('')
    }
    return (
        <form className='form-todos' onSubmit={submitHandle}>
            <input className='todo-input' type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder='Type some todos' />
            <button className='add-btn' disabled={!todo || !user} type='submit'>Add</button>
        </form>
    )
}
