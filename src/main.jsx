import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting, { Food, BedTime, SingleChildComponent } from './Greeting.jsx'
import Converted from './Converted.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Food />
    <BedTime />
    <SingleChildComponent />
    <Converted />
  </React.StrictMode>,
)
