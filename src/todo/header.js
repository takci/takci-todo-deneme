import { useSelector } from "react-redux"
import { loginHandle, logoutHandle } from "../utils"

export default function Header() {

    const { user } = useSelector(state => state.auth)

    const login = user => {
        loginHandle(user)
    }

    return (
        <header className="header">
            <h2 className="ana-baslik">Basic Todo App</h2>
            {!user && (
                <nav className="user-buttons">
                    <button className="user-button" onClick={() => login({ id: 1, username: 'User - 1'})}>Login as User 1</button>
                    <button className="user-button" onClick={() => login({ id: 2, username: 'User - 2'})}>Login as User 2</button>
                    <button className="user-button" onClick={() => login({ id: 3, username: 'User - 3'})}>Login as User 3</button>
                    <button className="user-button" onClick={() => login({ id: 4, username: 'User - 4'})}>Login as User 4</button>
                    <button className="user-button" onClick={() => login({ id: 5, username: 'User - 5'})}>Login as User 5</button>
                </nav>
            )}
            {user && (
                <div className="profil">
                <nav className="hosgeldin">
                    Hello, {user.username}. Write some task for today! <br/>
                </nav>
                    <button className="logout-btn" onClick={logoutHandle}>Logout</button></div>
            )}
        </header>
    )
}