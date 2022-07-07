import _ from "lodash";
import { useFormik } from "formik";

import MuiInput from "components/MuiInputOnBlur";
import Stack from "@mui/material/Stack";

const FIELDS = _.range(200);

const MapExampleNoKey = () => {
  const formik = useFormik({
    initialValues: {} as any,
    onSubmit: (values, actions) => {
      console.log(values, actions);
    },
  });

  return (
    <>
      Map Print no key
      <form onSubmit={formik.handleSubmit}>
        <Stack>
          {_.map(formik.values, (val, index) => (
            <div>
              {index} - {val}
            </div>
          ))}
        </Stack>
        <Stack spacing={2} sx={{ width: 600, margin: "auto", padding: 10 }}>
          {FIELDS.map((x, index) => (
            <MuiInput
              label={`${x}-field`}
              variant="outlined"
              fullWidth
              name={`${x}-field`}
              value={formik.values[`${x}-field`]}
              onChange={formik.handleChange}
            />
          ))}
        </Stack>
      </form>
    </>
  );
};

export default MapExampleNoKey;
