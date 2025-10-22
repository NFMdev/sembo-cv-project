import { ReactNode } from "react";
import './hover-preview-card.css'

type HoverPreviewCardProps = {
    webUrl: string;
    webImg: string;
    children: ReactNode;
}

export function HoverPreviewCard({
    webUrl,
    children,
}: HoverPreviewCardProps) {
    const handleClick = () => {
        window.open(webUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className="card-container"
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
