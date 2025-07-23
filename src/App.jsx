import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrelineInit from "../prelineInit";
import DashboardLayout from "./pages/components/DashboardLayout";


function App() {

  // useSessionTimeout();

  const router = createBrowserRouter([
    { path: "/", element: <>
      <PrelineInit />
      <DashboardLayout />
    </> },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;