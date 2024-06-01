import store from "./stores"
import { addTodo, deleteTodo } from "./stores/todo"
import { login, logout } from "./stores/auth"
import { openModal } from "./stores/modal"


export const addTodoHandle = todo => {
    
    store.dispatch(addTodo(todo))
    console.log(
        store.getState()
    )
}

export const loginHandle = user => {
    store.dispatch(login(user))
}

export const logoutHandle = () => {
    store.dispatch(logout())
}

export const modal = (name, data = false) => {
    store.dispatch(openModal({
        name,
        data
    }))
}

export const deleteTodoHandle = todo => {
    store.dispatch(deleteTodo(todo.id))
}