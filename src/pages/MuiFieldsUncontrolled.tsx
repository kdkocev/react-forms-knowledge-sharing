import { useFormik } from "formik";
import * as yup from "yup";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MuiInput from "components/MuiInputUncontrolled";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const MuiFieldsUncontrolled = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values, actions) => {
      console.log(values, actions);
    },
  });

  return (
    <>
      Uncontrolled
      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <div>{formik.values.email}</div>
          <div>{formik.values.password}</div>
        </Stack>
        <Stack spacing={2} sx={{ width: 600, margin: "auto", padding: 10 }}>
          <MuiInput
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <MuiInput
            label="Password"
            variant="outlined"
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default MuiFieldsUncontrolled;
