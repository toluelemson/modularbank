import React from 'react'
import ReactDOM from 'react-dom'
import 'fontsource-roboto'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { RouterConfig } from './navigation/router.config'

export const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <Router>
      <RouterConfig />
    </Router>
  </>
)

const mount = document.getElementById('app')
ReactDOM.render(<App />, mount)

export default App
