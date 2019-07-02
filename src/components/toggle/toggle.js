import React, { useState } from 'react'

import Switch from '../switch/switch'

const Toggle = ({
  children
}) => {
  const [ isOn, setIsOn ] = useState(false)
  const toggle = () => setIsOn(!isOn)

  return (
    <div className="toggle">
      {
        React.Children.map(children, child => (
          React.cloneElement(child, {
            isOn: isOn,
            onClick: toggle
          })
        ))
      }
    </div>
  )
}

Toggle.On = ({
  isOn,
  children
}) => (
  isOn ? children : null
)

Toggle.Off = ({
  isOn,
  children
}) => (
  !isOn ? children : null
)

Toggle.Switch = ({
  isOn,
  onClick,
  ...props
}) => (
  <Switch
    isOn={isOn}
    onClick={onClick}
    style={{ marginBottom: '10px' }}
    {...props}
  />
)

export default Toggle
