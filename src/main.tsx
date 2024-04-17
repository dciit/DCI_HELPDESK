import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Workorder from './pages/workorder.tsx';
import Sparepart from './pages/sparepart.tsx';
import NotFound from './pages/notfound.tsx';
import Layout from './pages/layout.tsx';
import Account from './pages/account.tsx';
import { MContext } from './interface.ts';
// import { MContext, MContextWorkorder } from './interface.ts';
const BASE = import.meta.env.VITE_PATH;

const context: MContext = {
  appname: 'IT HELPDESK',
  themelight: {
    bgColor: 'white',
    textTitleColor: 'text-[#049EF4]',
    textContentColor: 'text-[#6d6d6d]',
  }
}
export const ThemeContext = createContext<MContext>({});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext.Provider value={context}>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout />}>
            <Route path={`${BASE}/*`} element={<NotFound />} />
            <Route path={`${BASE}/workorder`} element={<Workorder />} />
            <Route path={`${BASE}/sparepart`} element={<Sparepart />} />
            <Route path={`${BASE}/account`} element={<Account />} />
          </Route>
          <Route path={`${BASE}`} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  </React.StrictMode>,
)
