import React, {
  useState,
  useContext,
  createContext
} from 'react'

import Switch from '../switch/switch'

const ToggleContext = createContext()

const useToggleContext = () => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error(`context consumer must be nested inside of a context provider`)
  }
  return context
}

const Toggle = ({
  children
}) => {
  const [ isOn, setIsOn ] = useState(false)
  const toggle = () => setIsOn(!isOn)
  
  console.log('Toggle rendered')

  return (
    <div className="toggle">
      <ToggleContext.Provider
        value={{
          isOn,
          onClick: toggle
        }}
      >
        {
          typeof children === 'function'
            ? children({
              isOn,
              toggle
            })
            : children
        }
      </ToggleContext.Provider>
    </div>
  )
}

const ToggleOn = ({
  children
}) => {
  const { isOn } = useToggleContext()

  console.log('Toggle.On rendered')

  return (
    isOn ? children : null
  )
}

const ToggleOff = ({
  children
}) => {
  const { isOn } = useToggleContext()

  console.log('Toggle.Off rendered')

  return (
    !isOn ? children : null
  )
}

const ToggleSwitch = () => {
  const { isOn, onClick } = useToggleContext()

  console.log('Toggle.Switch rendered')

  return (
    <Switch
      isOn={isOn}
      onClick={onClick}
      style={{ marginBottom: '10px' }}
    />
  )
}

Toggle.On = ToggleOn
Toggle.Off = ToggleOff
Toggle.Switch = ToggleSwitch

export default Toggle
