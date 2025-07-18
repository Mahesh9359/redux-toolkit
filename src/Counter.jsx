import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counterSlice'

export default function Counter() {
    const [input, setInput] = useState(0)
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(input));
        setInput(0);
    }

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <br />
                <br />
                <button
                    aria-label="Reset value"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
                <br />
                <br />
                <input type='Number'
                    value={input}
                    onChange={(e) => setInput(Number(e.target.value))}
                />
                <br />
                <br />
                <button
                    aria-label="Inc By Count"
                    onClick  = { handleIncrementByAmount }
                >
                    Increment by {input}
                </button>
                <br/>
            </div>
        </div>
    )
}