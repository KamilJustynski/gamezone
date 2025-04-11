import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { GameListPage } from "./pages/GameListPage";
import { GameCategoryPage } from "./pages/GameCategoryPage";
import { GameDetailsPage } from "./pages/GameDetailsPage";
import { FavoritePage } from "./pages/FavoritePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>WOOOOOPS SSOOOOO SOOORRRY MEEEEEN</p>,
    children: [
      {
        index: true,
        element: <GameListPage />,
      },
      {
        path: ":game/:id",
        element: <GameDetailsPage />,
      },
      {
        path: "category",
        element: <GameCategoryPage />,
      },
      {
        path: "favourite",
        element: <FavoritePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
