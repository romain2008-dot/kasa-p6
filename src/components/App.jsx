import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Logement from "../pages/Logement"
import Error from "../pages/Error"
import Layout from "./Layout"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logement/:id",
        element: <Logement />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App