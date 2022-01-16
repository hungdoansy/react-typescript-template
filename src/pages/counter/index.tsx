import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "@chakra-ui/react"

import { RootState } from "core/redux/reducer"
import counterSlice from "core/redux/counter.slice"

const Counter: React.FC = () => {
    const globalState = useSelector((state: RootState) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <section>
            <h1>GLOBAL COUNTER {globalState}</h1>
            <Button onClick={() => dispatch(counterSlice.actions.increments())}>Increment +</Button>
            {"  "}
            <Button onClick={() => dispatch(counterSlice.actions.decrements())}>Decrement -</Button>
            <br />

            <p>
                Try to reload this page or open a new tab or view this page another time.
                <br />
                You will see the same value everytime. Because the global state is persistent and saved in the
                localstorage
            </p>
        </section>
    )
}

export default Counter
