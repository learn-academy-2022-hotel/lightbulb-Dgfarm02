import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"
import lightOff from './assets/lightOff.png'
import lightOn from './assets/lightOn.png'
import switchOff from './assets/switchOff.png'
import switchOn from './assets/switchOn.png'

const App = () => {

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
    </>
  )
}

export default App
