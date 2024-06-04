import { useSelector } from "react-redux"
import { deleteTodoHandle, modal } from "../utils"


export default function TodoItem({ todo }) {

    const { user } = useSelector(state => state.auth)
    

    const deleteHandle = () => {
        deleteTodoHandle(todo)
    }

    const editHandle = () => {
        modal('edit-todo', todo)
    }

    return (
        <li className="list">
            <span className="todo-items" style={{textDecoration: todo.done ? 'line-through' : false}} >
                {todo.title} - {todo.user}
            </span>
            {todo.user === user.id && (
            <>  
                <button className="edit-btn" onClick={editHandle}>Düzenle</button>
                <button className="delete-btn" onClick={deleteHandle}>Sil</button>
            </>
            )}
        </li>
    )
}