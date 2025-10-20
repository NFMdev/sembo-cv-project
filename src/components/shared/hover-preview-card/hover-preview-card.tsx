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

    const handleClick = () => {
        window.open(webUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div 
            className="card-container"
            onMouseEnter={() => setWebImg(webImg)}
            onMouseLeave={() => setWebImg(null)}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            {children}
        </div>
    );
}
