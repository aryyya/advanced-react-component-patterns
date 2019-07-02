import React, {
  useState,
  useContext,
  createContext
} from 'react'

import Switch from '../switch/switch'

const ToggleContext = createContext({})

const Toggle = ({
  children
}) => {
  const [ isOn, setIsOn ] = useState(false)
  const toggle = () => setIsOn(!isOn)

  return (
    <div className="toggle">
      <ToggleContext.Provider
        value={{
          isOn,
          onClick: toggle
        }}
      >
        {children}
      </ToggleContext.Provider>
    </div>
  )
}

const ToggleOn = ({
  children
}) => {
  const { isOn } = useContext(ToggleContext)

  return (
    isOn ? children : null
  )
}

const ToggleOff = ({
  children
}) => {
  const { isOn } = useContext(ToggleContext)

  return (
    !isOn ? children : null
  )
}

const ToggleSwitch = ({
  ...props
}) => {
  const { isOn, onClick } = useContext(ToggleContext)

  return (
    <Switch
      isOn={isOn}
      onClick={onClick}
      style={{ marginBottom: '10px' }}
      {...props}
    />
  )
}

Toggle.On = ToggleOn
Toggle.Off = ToggleOff
Toggle.Switch = ToggleSwitch

export default Toggle
