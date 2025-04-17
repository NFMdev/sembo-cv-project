import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import './menu-bar.css'
import { ButtonMenuBar } from "./button-menu-bar/button-menu-bar";

export function MenuBar() {
    return (
        <AppBar position="static" style={{width: '100vw', boxShadow:'0px 0px 0px 1px rgba(32, 47, 71, 0.03), 0px -3px 3px -2px rgba(32, 47, 71, 0.04), 0px 2px 7px 0px rgba(32, 47, 71, 0.06), 0px 3px 4px -1px rgba(32, 47, 71, 0.08)'}} className="bar-background" elevation={0}>
            <Toolbar>
                <div style={{marginRight: '0', marginLeft: 'auto', display: 'flex', alignItems: 'center', fontFamily: 'Cocogoose Pro Darkmode'}}>
                    <a style={{marginRight: '1rem'}} href="">Support</a>
                    <ButtonMenuBar/>
                </div>
            </Toolbar>
        </AppBar>
    );
}