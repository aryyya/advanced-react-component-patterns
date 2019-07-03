import React, {
  useState,
  useContext,
  createContext
} from 'react'

import Switch from '../switch/switch'

import { callAll } from '../../utility'

const ToggleContext = createContext()

const useToggleContext = () => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error(`context consumer must be nested inside of a context provider`)
  }
  return context
}

const Toggle = ({
  startOn,
  children
}) => {
  console.log('Toggle rendered')

  const [ isOn, setIsOn ] = useState(startOn || false)
  const toggle = () => setIsOn(!isOn)

  const state = {
    isOn,
    onClick: toggle
  }

  const getTogglerProps = ({
    onClick,
    ...props
  } = {}) => ({
    onClick: callAll(onClick, toggle),
    ...props
  })

  const reset = () => {
    setIsOn(false)
  }

  const childrenToRender = typeof children === 'function'
    ? children({
      isOn,
      toggle,
      getTogglerProps,
      reset
    })
    : children

  return (
    <div className="toggle">
      <ToggleContext.Provider value={state}>
        {childrenToRender}
      </ToggleContext.Provider>
    </div>
  )
}

const ToggleOn = ({
  children,
  ...props
}) => {
  const { isOn } = useToggleContext()

  console.log('Toggle.On rendered')

  return (
    isOn ? React.cloneElement(children, {...props}) : null
  )
}

const ToggleOff = ({
  children,
  ...props
}) => {
  const { isOn } = useToggleContext()

  console.log('Toggle.Off rendered')

  return (
    !isOn ? React.cloneElement(children, {...props}) : null
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
