/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const modeContext = createContext();

export function DarkModeProvider({children}){
    const [darkmode , setDarkMode] = useState(false);

    return <modeContext.Provider value={[darkmode , setDarkMode]}>
        {children}
    </modeContext.Provider>
}

