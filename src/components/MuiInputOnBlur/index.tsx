import MuiTextField, { TextFieldProps } from "@mui/material/TextField";

const TextField = ({ value, onChange, ...props }: TextFieldProps) => {
  return <MuiTextField {...props} defaultValue={value} onBlur={onChange} />;
};

export default TextField;
