import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting, { Food, BedTime, SingleChildComponent } from './Greeting.jsx'
import Converted from './Converted.jsx'
import AnimalList from './AnimalList.jsx'
import './index.css'

const ANIMALS = ["Lion", "Tiger", "Bear", "Human"]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Food />
    <BedTime />
    <SingleChildComponent />
    <Converted />
    <AnimalList animals={ANIMALS} />
  </React.StrictMode>,
)
