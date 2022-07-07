import _ from "lodash";

import MuiTextField, { TextFieldProps } from "@mui/material/TextField";

const TextField = ({ value, onChange, ...props }: TextFieldProps) => {
  return (
    <MuiTextField
      {...props}
      defaultValue={value}
      onChange={onChange && _.debounce(onChange, 200)}
    />
  );
};

export default TextField;
