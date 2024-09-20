import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

import type { Team } from "@/app/types"

interface TeamsContextType { 
    allTeams: Team[];
    setAllTeams: Dispatch<SetStateAction<Team[]>>;
}

export const TeamsContext = createContext({} as TeamsContextType);

interface TeamsProviderProps {
    children: ReactNode;
}

export const TeamsProvider = ({children} : TeamsProviderProps) => {
    const [allTeams, setAllTeams] = useState([] as Team[]);

    return (
        <TeamsContext.Provider value={{allTeams, setAllTeams}}>
            {children}
        </TeamsContext.Provider>
    )

}