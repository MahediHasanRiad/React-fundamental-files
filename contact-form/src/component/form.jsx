import React, { useState } from "react";

 const initial_value = {
        name: '',
        email: '',
        group: ''
    }

function Form({ getData }) {

    const [value, setValue] = useState({...initial_value})

    const inputHandler = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setValue({...initial_value})
        getData(value)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={value.name} onChange={inputHandler} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={value.email} onChange={inputHandler} />
                <select name="group" id="group" value={value.group} onChange={inputHandler}>
                    <option value="">Select</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form