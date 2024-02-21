import React from "react"
import CodeEditor from "./Components/CodeEditor"
import './App.css'
import DataProvider from "./context/DataProvider"

function App() {
  return (
    <>
    <DataProvider>
    <CodeEditor />
    </DataProvider>
    </>
  )
}

export default App
