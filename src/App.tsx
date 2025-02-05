import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { GameListPage } from "./pages/GameListPage";
import { GameCategoryPage } from "./pages/GameCategoryPage";
import { GameDetailsPage } from "./pages/GameDetailsPage";

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
        element: <GameListPage />,
      },
      {
        path: "list/:game/:id",
        element: <GameDetailsPage />,
      },
      {
        path: "category",
        element: <GameCategoryPage />,
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
