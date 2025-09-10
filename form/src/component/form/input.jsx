import { Input, Label, Error } from "../style/input";

function InputValue({ id, labelText, value, name, onChange, onFocus, onBlur, error }) {
  return (
    <>
      <div>
        <Label htmlFor={id} size={"md"}>
          {labelText}
        </Label>
        <Input
          type="text"
          value={value}
          id={id}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          error={error}
        />
        {error && <Error>Invalid {name} </Error>}
      </div>
    </>
  );
}

export default InputValue;
