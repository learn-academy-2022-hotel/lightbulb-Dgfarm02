import React, { useState } from "react"


const LightSwitch = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  const [backgroundColor, setBackgroundColor] = useState("white")
  const handleClick = () => {
    setLightSwitchStatus(lightSwitchStatus === "off" ? "on" : "off")
    setBackgroundColor(backgroundColor === "white" ? "yellow" : "white")
    // if (lightSwitchStatus === "off") {
    //   setLightSwitchStatus = "on"
    // if (lightSwitchStatus === "on") {
    //   setLightSwitchStatus = "off"
    // }
    // }
  }
  return (
    <>
      <div 
      className="lightbulb"
      onClick={handleClick}
      style={{ backgroundColor: backgroundColor}}
      >{lightSwitchStatus}
      </div>
    </>
  )
}

export default LightSwitch
