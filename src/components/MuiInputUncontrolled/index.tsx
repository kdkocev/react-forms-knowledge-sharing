import React from "react";
import MuiTextField, { TextFieldProps } from "@mui/material/TextField";

const TextField = ({ value, ...props }: TextFieldProps) => {
  return <MuiTextField {...props} defaultValue={value} />;
};

export default React.memo(TextField);
