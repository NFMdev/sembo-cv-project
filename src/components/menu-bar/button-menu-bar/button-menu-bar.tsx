import { AccountCircleOutlined } from "@mui/icons-material"
import './button-menu-bar.css'

export function ButtonMenuBar() {
    return (
        <button className="bar-button">
            <div>
                <AccountCircleOutlined/>
            </div>
            <span>Sign in</span>
        </button>
    )
}