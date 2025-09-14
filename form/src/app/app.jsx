import { useState } from "react";
import Input from "../component/form/input";
import Container from "../component/style/container"
import { SubmitButton } from "../component/style/button";


const initial = {
    name: '',
    email: '',
    password: ''
}

function App() {
    const [values, setValues] = useState({...initial})
    const [errors, setErrors] = useState({...initial})
    const [hasError, setHasError] = useState(false)
    const [focus, setFocus] = useState({
        name: false,
        email: false,
        password: false
    })


    const inputHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        const {error, isValid} = checkValidity(values)
        if(isValid){
            console.log(values)
            setValues(values)
            setErrors({...initial})
            setHasError(false)
        }else{
            setErrors({...error})
            setHasError(true)
            console.log(errors)
        }
        
    }

    const checkValidity = (values) => {
        const error = {}
        const {name, email, password} = values
        if(!name){
            error.name = 'Invalid Name !'
        }
        if(!email){
            error.email = 'Invalid Email !'
        }
        if(!password){
            error.password = 'Invalid Password'
        }

        return {
            error,
            isValid: Object.keys(error).length === 0
        }
    }

    const handleFocus = e => {
        setFocus({
            ...focus,
            [e.target.name]: true
        })
    }

    const handleBlur = e => {
        const { error } = checkValidity(values)

        if(error[e.target.name] && focus[e.target.name]){
            setErrors({
                ...errors,
                [e.target.name]: error[e.target.name] 
            })
            setHasError(true)
        }else{
            setErrors({
                ...errors,
                [e.target.name]: ''
            })
            setHasError(false)
        }
        // or
        // setErrors({
        //     ...errors,
        //     [e.target.name]: error[e.target.name] || ''
        // })
    }

  return (
      <Container>
       <form>
         <Input
            id={"name"}
            labelText={"Name: "}
            name={"name"}
            value={values.name}
            error={errors.name}
            onChange={inputHandler}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        <Input
            id={"email"}
            labelText={"Email: "}
            name={"email"}
            value={values.email}
            onChange={inputHandler}
            error={errors.email}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        <Input
            id={"password"}
            labelText={"Password: "}
            name={"password"}
            value={values.password}
            onChange={inputHandler}
            error={errors.password}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        <SubmitButton disabled={hasError} onClick={submitHandler}>SUBMIT</SubmitButton>
       </form>
      </Container>
  );
}

export default App;
