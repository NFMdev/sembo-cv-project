import { useContext } from "react"
import { WebContext } from "../../contexts/web-context"
import './web-preview.css'

export const WebPreview = () => {
    const { webImg } = useContext(WebContext);
    if (!webImg) return null;

    return (
        <div 
            className={`background-image ${webImg ? 'active': ''}`}
            style={{ backgroundImage: `url(${webImg ? webImg : ''})` }}
        ></div>
    );
}