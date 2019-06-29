import React, { useState } from 'react'

import Switch from '../switch/switch'

const Toggle = () => {
  const [ isOn, setIsOn ] = useState(false)
  const toggle = () => setIsOn(!isOn)

  return (
    <Switch
      isOn={isOn}
      onClick={toggle}
    />
  )
}

export default Toggle
