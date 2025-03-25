import { IButtonProps } from "../contracts/IbuttonProps";


export const Button = ({ text, onClick, disabled = false }: IButtonProps) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{ padding: "10px", marginTop: "10px", cursor: disabled ? "not-allowed" : "pointer" }}
      >
        {text}
      </button>
    );
  };