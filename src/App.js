import React from 'react'
import './App.css'

import Toggle from './components/toggle/toggle'
import ToggleClass from './components/toggle/toggle-class'

const App = () => {
  return (
    <div className="app">
      <Toggle>
        {({ isOn, toggle, getTogglerProps, reset }) => (
          <div>
            <Toggle.Switch />
            <input type="checkbox" checked={isOn} onChange={toggle} />
            &nbsp;
            <Toggle.On {...getTogglerProps()}>
              <div>The switch is on!</div>
            </Toggle.On>
            <Toggle.Off {...getTogglerProps()}>
              <div>The switch is off.</div>
            </Toggle.Off>
            <div>
              <button
                {...getTogglerProps({
                  onClick: () => alert(`The switch is ${isOn ? 'on' : 'off'}!`)
                })}
                style={{ padding: '5px 10px' }}
              >
                {isOn ? 'ON' : 'OFF'}
              </button>
              <button
                style={{ padding: '5px 10px' }}
                onClick={reset}
              >
                RESET
              </button>
            </div>
          </div>
        )}
      </Toggle>
      <br />
      <Toggle startOn>
        <Toggle.Switch />
        <Toggle.On>
          <div>ON</div>
        </Toggle.On>
        <Toggle.Off>
          <div>OFF</div>
        </Toggle.Off>
      </Toggle>
      <ToggleClass>
        {({ toggle, isOn }) => (
          <div>
            <ToggleClass.Switch />
            <ToggleClass.On>
              <div>This switch is on!</div>
            </ToggleClass.On>
            <ToggleClass.Off>
              <div>This switch is off.</div>
            </ToggleClass.Off>
            <div>
              <button style={{ backgroundColor: isOn ? 'red' : 'blue'}} onClick={toggle}>CLICK ME</button>
            </div>
          </div>
        )}
      </ToggleClass>
    </div>
  )
}

export default App
