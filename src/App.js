import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'

const App = () => (
  <HashRouter>
    <>
      <Header />
      <Routes />
    </>
  </HashRouter>
)

export default App
