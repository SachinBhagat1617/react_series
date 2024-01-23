import {createContext,useContext} from 'react'

// yaha pe tum createContext mai default value dal sakte ho
// ki context jab feed ho to use mai default value present ho
//default object present hai
// ye kam tum previous project mai context provider mai kar rahe the
export const ThemeContext=createContext({
    themeMode: "light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})


export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
//kabhi tumhe themeMode,darkTheme,lightTheme ka use karna ho to tumhe bas useTheme import karna hoga

