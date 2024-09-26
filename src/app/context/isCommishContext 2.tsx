import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface isCommishContextType { 
    isCommish: boolean;
    setIsCommish: Dispatch<SetStateAction<boolean>>;
}

export const IsCommishContext = createContext({} as isCommishContextType);

interface IsCommishProviderProps {
    children: ReactNode;
}

export const IsCommishProvider = ({children} : IsCommishProviderProps) => {
    const [isCommish, setIsCommish] = useState(false);

    return (
        <IsCommishContext.Provider value={{isCommish, setIsCommish}}>
            {children}
        </IsCommishContext.Provider>
    )
}