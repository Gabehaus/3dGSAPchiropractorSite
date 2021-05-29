import React, { useRef, useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Components/Home"

export default function App() {
  return (
    <Router>
      {/* <Header /> */}

      <main className='main'>
        <Route path='/' component={Home} exact />
      </main>
    </Router>
  )
}
