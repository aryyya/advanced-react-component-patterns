import React from 'react'
import './App.css'

import Toggle from './components/toggle/toggle'

const App = () => {
  return (
    <div className="app">
      <Toggle>
        {({ isOn, toggle, togglerProps }) => (
          <div>
            <Toggle.Switch />
            <input type="checkbox" checked={isOn} onChange={toggle} />
            &nbsp;
            <Toggle.On {...togglerProps}>
              <div>The switch is on!</div>
            </Toggle.On>
            <Toggle.Off {...togglerProps}>
              <div>The switch is off.</div>
            </Toggle.Off>
          </div>
        )}
      </Toggle>
      <br />
      <Toggle>
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
