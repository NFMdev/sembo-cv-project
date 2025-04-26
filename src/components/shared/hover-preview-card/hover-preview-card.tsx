import { ReactNode, useContext } from "react";
import { WebContext } from "../../../contexts/web-context";
import './hover-preview-card.css'

type HoverPreviewCardProps = {
    webUrl: string;
    webImg: string;
    children: ReactNode;
}

export function HoverPreviewCard({
    webUrl,
    webImg,
    children,
}: HoverPreviewCardProps) {
    const { setWebImg } = useContext(WebContext);

    return (
        <a 
            className="card-container"
            onMouseEnter={() => setWebImg(webImg)}
            onMouseLeave={() => setWebImg(null)}
            href={webUrl}
            target="blank"
            rel="noopener noreferrer"

        >
            {children}
        </a>
    );
}