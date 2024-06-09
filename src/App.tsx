import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sessions from "./pages/Sessions";
import Root from "./pages/Root";
import Session from "./pages/Session";

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: "sessions", element: <Sessions /> },
        { path: "sessions/:id", element: <Session /> },
      ],
    },
  ]);

  return <RouterProvider router={Router} />;
};

export default App;
