import React from 'react'
import './App.css'

import Toggle from './components/toggle/toggle'

function App() {
  return (
    <div className="app">
      <Toggle>
        <div>
          <Toggle.Switch />
        </div>
        <Toggle.On>
          <p style={{ textAlign: 'center' }}>The switch is on!</p>
        </Toggle.On>
        <Toggle.Off>
          <p style={{ textAlign: 'center' }}>The switch is off.</p>
        </Toggle.Off>
      </Toggle>
    </div>
  )
}

export default App
