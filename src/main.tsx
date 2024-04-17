import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login.tsx';
import Workorder from './pages/workorder.tsx';
import Sparepart from './pages/sparepart.tsx';
import NotFound from './pages/notfound.tsx';
import { MContext } from './interface.ts';
const BASE = import.meta.env.VITE_PATH;

const ThemeContext = createContext<MContext>({});
const context: MContext = {
  appname: 'IT HELPDESK'
}
const router = createBrowserRouter([
  {
    path: `/${BASE}/`,
    element: <Login />,
  },
  {
    path: `/${BASE}/*`,
    element: <NotFound />
  },
  {
    path: `/${BASE}/login`,
    element: <Login />
  },
  {
    path: `/${BASE}/workorder`,
    element: <Workorder />
  },
  {
    path: `/${BASE}/sparepath`,
    element: <Sparepart />
  }

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext.Provider value={context}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  </React.StrictMode>,
)
