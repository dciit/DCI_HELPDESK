import React from 'react'
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
const BASE = import.meta.env.VITE_PATH;
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
