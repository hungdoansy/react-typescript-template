import ReactDOM from "react-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import getStoreAndPersistor from "core/redux/store"
import Counter from "pages/counter"
import Home from "pages/home"

import theme from "theme"
import GlobalStyle from "theme/globalStyle"

const { store, persistor } = getStoreAndPersistor()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ChakraProvider theme={theme}>
                <GlobalStyle />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <div>About</div>
                        </Route>
                        <Route path="/counter">
                            <Counter />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ChakraProvider>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
