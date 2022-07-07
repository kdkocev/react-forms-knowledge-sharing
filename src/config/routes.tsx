import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  NavLink,
} from "react-router-dom";
import _ from "lodash";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { URLS } from "config/urls";

import MuiFieldsControlled from "pages/MuiFieldsControlled";
import MuiFieldsUncontrolled from "pages/MuiFieldsUncontrolled";
import MuiFieldsOnBlur from "pages/MuiFieldsOnBlur";
import MuiFieldsOnChangeDebounce from "pages/MuiFieldsOnChangeDebounce";
import MapExampleNoKey from "pages/MapExampleNoKey";
import MapExampleNoKeyReorder from "pages/MapExampleNoKeyReorder";
import MultipleFieldsNoMap from "pages/MultipleFieldsNoMap";

const PageLayout = () => {
  return (
    <>
      <Stack spacing={1} direction="row">
        {_.map(URLS, (url, key) => (
          <NavLink to={url} key={key}>
            {({ isActive }) => (
              <Button variant={isActive ? "contained" : "text"}>
                {key.toLowerCase().replaceAll("_", " ")}
              </Button>
            )}
          </NavLink>
        ))}
      </Stack>
      <Outlet />
    </>
  );
};

const LocalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route
            path={URLS.MUI_FIELDS_UNCONTROLLED}
            element={<MuiFieldsUncontrolled />}
          />
          <Route
            path={URLS.MUI_FIELDS_CONTROLLED}
            element={<MuiFieldsControlled />}
          />
          <Route path={URLS.MUI_FIELDS_ON_BLUR} element={<MuiFieldsOnBlur />} />
          <Route
            path={URLS.MUI_FIELDS_ON_CHNAGE_DEBOUNCE}
            element={<MuiFieldsOnChangeDebounce />}
          />
          <Route path={URLS.MAP_EXAMPLE_NO_KEY} element={<MapExampleNoKey />} />
          <Route
            path={URLS.MAP_EXAMPLE_NO_KEY_REORDER}
            element={<MapExampleNoKeyReorder />}
          />
          <Route
            path={URLS.MULTIPLE_FIELDS_NO_MAP}
            element={<MultipleFieldsNoMap />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LocalRouter;
