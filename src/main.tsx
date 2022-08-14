import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './main.scss'

const app: HTMLElement | null = document.querySelector('#app');
const root = ReactDOM.createRoot(app as HTMLElement);

root.render(<App />);