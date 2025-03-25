import { InputProps } from "../contracts/IInputProps";

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "10px", margin: "5px 0", width: "100%" }}
      />
    );
  };