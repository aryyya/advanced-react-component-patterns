import React from 'react'
import './App.css'

import Toggle from './components/toggle/toggle'

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
    </div>
  )
}

export default App
