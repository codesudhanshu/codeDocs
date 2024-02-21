import { createContext, useState } from "react";

export const DataContext = createContext()
const DataProvider = ({children}) =>{
    const [html, sethtml] = useState('')
    const [css,setcss] = useState('')
    const [javascript,setjavascript] = useState('')
    return (
        <DataContext.Provider value={{
            html,sethtml,css,setcss,javascript,setjavascript
        }}>
            {children}
    </DataContext.Provider>
    )
}

export default DataProvider