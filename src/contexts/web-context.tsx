import { createContext, ReactNode, useState } from "react";

interface WebContextType {
    webImg: string | null;
    setWebImg: (img: string | null) => void;
}

export const WebContext = createContext<WebContextType>({
    webImg: null,
    setWebImg: () => {}
});

export const WebProvider = ({ children }: {children: ReactNode}) => {
    const [webImg, setWebImg] = useState<string | null>(null);

    return (
        <WebContext.Provider value ={{
                webImg: webImg,
                setWebImg: setWebImg
            }}>
            {children}
        </WebContext.Provider>
    )
}