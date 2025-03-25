export interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}