import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./redux/store"

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)
