import React from 'react'
import ReactDOM from 'react-dom/client'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App'

import rootReducer from './models'
import history from "@/utils/history";

import 'antd/dist/antd.css'
import './main.scss'

import '../mock'

const app: HTMLElement | null = document.querySelector('#app')
const root = ReactDOM.createRoot(app as HTMLElement)

root.render(
    <Provider store={rootReducer}>
        <HistoryRouter history={history}>
            <App />
        </HistoryRouter>
    </Provider>

)