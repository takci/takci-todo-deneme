import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../stores/auth"

export default function Header() {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const loginHandle = user => {
        dispatch(login(user))
    }

    const logoutHandle = () => {
        dispatch(logout())
    }

    return (
        <header className="header">
            <h2>Logo</h2>
            {!user && (
                <nav>
                    <button onClick={() => loginHandle({ id: 1, username: 'furkantakci'})}>furkantakci olarak giriş yap</button>
                    <button onClick={() => loginHandle({ id: 2, username: 'egeozdengiz'})}>egeozdengiz olarak giriş yap</button>
                </nav>
            )}
            {user && (
                <nav>
                    Hoşgeldin, {user.username}
                    <button onClick={logoutHandle}>Logout</button>
                </nav>
            )}
        </header>
    )
}