import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
import './index.css'
import "remixicon/fonts/remixicon.css";
import { Provider } from 'react-redux'
import store from "./redux/Store";
;



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
