import { RouterProvider } from "react-router-dom";

import router from "./router/routes";

function App() {
  // useSessionTimeout();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
