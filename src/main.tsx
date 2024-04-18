import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux/store.ts';
import Routers from './Router.tsx';
import { MContext } from './interface.ts';
const context: MContext = {
  appname: 'IT HELPDESK',
  contact: 'ติดต่อ IT (611,612)',
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
      <Provider store={store}>
        <Routers />
      </Provider>
    </ThemeContext.Provider>
  </React.StrictMode>,
)
