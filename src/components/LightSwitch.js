import React, { useState } from "react"
import lightOff from '../assets/lightOff.png'
import lightOn from '../assets/lightOn.png'
import switchOff from '../assets/switchOff.png'
import switchOn from '../assets/switchOn.png'

const LightSwitch = () => {
  const images = [ 
    lightOff, 
    lightOn, 
    switchOff, 
    switchOn
  ]
  const [lightSwitchStatus, setLightSwitchStatus] = useState(switchOff)
  const [lightStatus, setLightStatus] = useState(lightOff)
  const handleClick = () => {
    setLightSwitchStatus(lightSwitchStatus === switchOff ? switchOn : switchOff)
    setLightStatus(lightStatus === lightOff ? lightOn : lightOff)
  }
  return (
    <>
      <div className="layout">
      <img src={lightSwitchStatus} onClick={handleClick}></img>
      <img src={lightStatus}></img>
      </div>
      <br />
    </>
  )
}

export default LightSwitch
