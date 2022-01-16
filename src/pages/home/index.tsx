import { Box } from "@chakra-ui/react"

import logo from "./logo.svg"
import "./index.css"

function App() {
    return (
        <Box className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </Box>
    )
}

export default App