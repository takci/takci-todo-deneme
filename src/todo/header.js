import { useSelector } from "react-redux"
import { loginHandle, logoutHandle } from "../utils"

export default function Header() {

    const { user } = useSelector(state => state.auth)

    const login = user => {
        loginHandle(user)
    }

    return (
        <header className="header">
            <h2>Logo</h2>
            {!user && (
                <nav>
                    <button onClick={() => login({ id: 1, username: 'furkantakci'})}>furkantakci olarak giriş yap</button>
                    <button onClick={() => login({ id: 2, username: 'egeozdengiz'})}>egeozdengiz olarak giriş yap</button>
                    <button onClick={() => login({ id: 3, username: 'esseginsiki'})}>esseginsiki olarak giriş yap</button>
                    <button onClick={() => login({ id: 4, username: 'bestekarmehmet'})}>bestekarmehmet olarak giriş yap</button>
                    <button onClick={() => login({ id: 5, username: 'alihankasap'})}>alihankasap olarak giriş yap</button>
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