import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import './main.scss'

import '../mock'

const app: HTMLElement | null = document.querySelector('#app')
const root = ReactDOM.createRoot(app as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)