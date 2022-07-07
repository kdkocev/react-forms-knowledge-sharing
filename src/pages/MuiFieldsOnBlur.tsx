import { useFormik } from "formik";
import * as yup from "yup";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MuiInput from "components/MuiInputOnBlur";

const validationSchema = yup.object({});

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
      <div>Uncontrolled</div>
      <div>Submitting works well no matter how quick you click the button</div>
      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <div>{formik.values.email}</div>
          <div>{formik.values.password}</div>
        </Stack>
        <Stack spacing={2} sx={{ width: 600, margin: "auto" }}>
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
