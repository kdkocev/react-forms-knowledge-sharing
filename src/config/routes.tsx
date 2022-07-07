import { BrowserRouter, Routes, Route } from "react-router-dom";

import { URLS } from "config/urls";

import MuiFieldsControlled from "pages/MuiFieldsControlled";
import MuiFieldsUncontrolled from "pages/MuiFieldsUncontrolled";
import MuiFieldsOnBlur from "pages/MuiFieldsOnBlur";
import MuiFieldsOnChangeDebounce from "pages/MuiFieldsOnChangeDebounce";
import MapExampleNoKey from "pages/MapExampleNoKey";
import MapExampleNoKeyReorder from "pages/MapExampleNoKeyReorder";

const LocalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
};

export default LocalRouter;
