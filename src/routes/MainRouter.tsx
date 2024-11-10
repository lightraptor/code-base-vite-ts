import { MENU } from 'defines'
import { AboutPage, HomePage, ThemePage } from 'page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: MENU.Home,
      element: <HomePage />
    },
    {
      path: MENU.About,
      element: <AboutPage />
    },
    {
      path: MENU.Theme,
      element: <ThemePage />
    }
  ])
  return <RouterProvider router={router} />
}
