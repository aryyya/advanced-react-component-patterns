import React from 'react'
import './App.css'

import Toggle from './components/toggle/toggle'

const App = () => {
  return (
    <div className="app">
      <Toggle>
        {({ isOn, toggle }) => (
          <div>
            <Toggle.Switch />
            <input type="checkbox" checked={isOn} onChange={toggle} />
            &nbsp;
            <Toggle.On>The switch is on!</Toggle.On>
            <Toggle.Off>The switch is off.</Toggle.Off>
          </div>
        )}
      </Toggle>
      <br />
      <Toggle>
        <Toggle.Switch />

      </Toggle>
    </div>
  )
}

export default App
