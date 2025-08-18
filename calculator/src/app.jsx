import React, { useState } from "react";
import classes from './app.module.css'

const App = () => {

    const initialValue = {
        a: 20,
        b: 10
    }
    const [inputValue, setInputValue] = useState({...initialValue})
    const [result, setResult] = useState(0)
    const [histories, setHistories] = useState([])


    // input handler
    const inputHandler = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    // id generator 
    function * generatorID(){
        let id = 1;
        while(true){
            yield id++
        }
    }
    const genID = generatorID()

    // operator value
    const operatorValue = (operator) => {
        const f = new Function('operator', ` return ${inputValue.a} ${operator} ${initialValue.b} `)
        const result = f(operator)

        // set Result
        setResult(result)

        // history section
        const historyItem = {
            id: genID.next().value,
            input: inputValue,
            operator,
            result,
            date: new Date().toLocaleDateString()
        }

        setHistories([historyItem, ...histories])
        
    }

    // clear value
    const clearValue = () => {
        setInputValue({...initialValue})
        setResult(0)
    }

    return(
        <div className={classes.body}>
            <div>
                <h1>Result: {result}</h1>
                <input type="number" name="a" value={inputValue.a} onChange={inputHandler} />
                <input type="number" name="b" value={inputValue.b} onChange={inputHandler} />
            </div>
            <div>
                <button onClick={()=> operatorValue('+')}>+</button>
                <button onClick={()=> operatorValue('-')}>-</button>
                <button onClick={()=> operatorValue('*')}>*</button>
                <button onClick={()=> operatorValue('/')}>/</button>
                <button onClick={()=> operatorValue('%')}>%%%%%%%</button>
                <button onClick={clearValue}>clear</button>
            </div>
            <div>
                <h1>History:</h1>

                {histories.length == 0 ? <p>There is no history</p> : 

                <ul>
                    {histories.map(history => (
                        <li>
                            <b> Operation: </b>{history.input.a} {history.operator} {history.input.b} 
                            <b> Result: </b>{history.result} 
                            <b> Date: </b>{history.date}
                            <button>Restore</button>
                        </li>
                    ))}
                </ul>
                }
            </div>
        </div>
    )
}

export default App