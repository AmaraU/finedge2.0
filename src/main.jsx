import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
import * as VanillaCalendarPro from "vanilla-calendar-pro";

import App from "./App.jsx";
import "./index.css";
import "preline/preline";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
