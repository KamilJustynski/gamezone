import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { GameList } from "./components/GameList";
import { GameCategory } from "./components/GameCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <h1>Strona startowa</h1>,
      },
      {
        path: "list",
        element: <GameList />,
      },
      {
        path: "category",
        element: <GameCategory />,
      },
      {
        path: "favourite",
        element: <h1>Ulubione gry</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
