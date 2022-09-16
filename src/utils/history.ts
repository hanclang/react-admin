import { createBrowserHistory, createHashHistory } from 'history'

let history = createBrowserHistory({window})

if (ROUTER_MODE === 'hash') {
  history = createHashHistory({window})
}


export default history
