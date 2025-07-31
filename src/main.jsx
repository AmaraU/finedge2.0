import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "datatables.net";
import { Provider } from "react-redux";
import "dropzone/dist/dropzone-min.js";
import { PersistGate } from "redux-persist/integration/react";
import * as VanillaCalendarPro from "vanilla-calendar-pro";

import App from "@/App";
import "@/index.css";
import "preline/preline";
import { store, persistor } from "@/store/store.js";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
