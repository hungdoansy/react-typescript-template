import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./App"
import "./index.css"
import theme from "./theme"
import GlobalStyle from "./theme/globalStyle"

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/about">
                    <div>About</div>
                </Route>
            </Switch>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
