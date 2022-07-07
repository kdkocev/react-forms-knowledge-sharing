import _ from "lodash";
import { Formik, FieldArray, Form } from "formik";

import MuiInput from "components/MuiInputOnBlur";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FIELDS = _.range(50);

const MapExampleReorder = () => {
  return (
    <>
      Map Print no key reorder enabled
      <Formik
        initialValues={{
          fields: FIELDS.map((x) => ({ value: undefined, key: x })),
        }}
        onSubmit={(values, actions) => {
          console.log(values, actions);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Stack direction="row">
              <Stack>
                {_.map(formik.values.fields, (val, index) => (
                  <div key={index}>
                    {index} - {val.value}
                  </div>
                ))}
              </Stack>
              <Stack
                spacing={2}
                sx={{ width: 600, margin: "auto", padding: 10 }}
              >
                <FieldArray
                  name="fields"
                  render={(arrayHelpers) => (
                    <>
                      {formik.values.fields.map((x, index) => (
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={2}
                          key={formik.values.fields[index].key}
                        >
                          <IconButton
                            onClick={() => arrayHelpers.move(index, index + 1)}
                          >
                            <ArrowDownwardIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => arrayHelpers.move(index, index - 1)}
                          >
                            <ArrowUpwardIcon />
                          </IconButton>
                          <MuiInput
                            label={`${x.key}-field`}
                            name={x.key.toString()}
                            variant="outlined"
                            value={x.value}
                            fullWidth
                            onChange={(event: any) =>
                              formik.setFieldValue(`fields.${index}`, {
                                value: event.target.value,
                                key: x.key,
                              })
                            }
                          />
                        </Stack>
                      ))}
                    </>
                  )}
                />
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MapExampleReorder;
