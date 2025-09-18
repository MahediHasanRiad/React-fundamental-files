import { InputStyle, Error } from "../style/input";

function Input({ id, name, placeholder, value, onChange, onFocus, onBlur, error }) {
  return (
    <div>
      <InputStyle
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
      />
      {error && <Error>Fill-up your {name}</Error>}
    </div>
  );
}

export default Input;
