import { useState } from "react";
import Input from "./input";
import Container from "../../component/style/container";
import Button from "../../component/style/button";
import shortid from "shortid";

const initialValue = {
  id: '',
  name: "",
  email: "",
  password: "",
};

function InputGroup({ getData }) {
  const [datas, setDatas] = useState({ ...initialValue });
  const [errors, setErrors] = useState({ ...initialValue })
  const [hasError, setHasError] = useState(false)
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    password: false
  })

  const inputHandler = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const focusHandler = (e) => {
    setFocus({
        ...focus,
        [e.target.name]: true
    })
  };

  const blurHandler = (e) => {
    const {error} = formValidity(datas)

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
  };

  const save = (e) => {
    e.preventDefault();
    const { error, isValid } = formValidity(datas);

    if(isValid){
        const updateDatas = {
          id: shortid.generate(),
          name: datas.name,
          email: datas.email,
          password: datas.password
        }
        setErrors({...initialValue})
        getData(updateDatas);
        setHasError(false)
        setDatas({...initialValue})
    }else{
        setErrors({...error})
        setHasError(true)
    }

  };

  const formValidity = (datas) => {
    const error = {};
    const { name, email, password } = datas;
    if (!name) {
      error.name = "Invalid Name";
    }
    if (!email) {
      error.email = "Invalid Email";
    }
    if (!password) {
      error.password = "Invalid Password";
    }

    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  };


  return (
    <Container>
      <Input
        id="name"
        name="name"
        placeholder="Enter your name..."
        value={datas.name}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        error={errors.name}
      />
      <Input
        id="email"
        name="email"
        placeholder="Enter your email..."
        value={datas.email}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        error={errors.email}
      />
      <Input
        id="password"
        name="password"
        placeholder="Enter your password..."
        value={datas.password}
        onChange={inputHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        error={errors.password}
      />
      <div>
        <Button onClick={save} disabled={hasError}>SAVE</Button>
      </div>
    </Container>
  );
}
export default InputGroup;
