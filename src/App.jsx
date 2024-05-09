import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import "./styles/nav.css";
import Home from "./pages/Home";
import "./styles/home.css";
import Registration from "./pages/Registration";
import "./styles/registration.css";
import "./styles/successfulSubmit.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
