import { BrowserRouter, Routes, Route } from "react-router-dom";

import { URLS } from "config/urls";

import MuiFieldsControlled from "pages/MuiFieldsControlled";
import MuiFieldsUncontrolled from "pages/MuiFieldsUncontrolled";

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
      </Routes>
    </BrowserRouter>
  );
};

export default LocalRouter;
