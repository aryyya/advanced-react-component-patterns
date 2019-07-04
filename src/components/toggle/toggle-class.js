import React, {
  Component,
  createContext
} from 'react'

import Switch from '../switch/switch'

const ToggleClassContext = createContext()

class ToggleClass extends Component {
  state = {
    isOn: false
  }

  toggle = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render () {
    console.log('ToggleClass rendered')

    const contextValue = {
      isOn: this.state.isOn,
      onClick: this.toggle
    }

    const renderProps = {
      isOn: this.state.isOn,
      toggle: this.toggle
    }

    return (
      <div className="toggle-class">
        <ToggleClassContext.Provider value={contextValue}>
          {this.props.children(renderProps)}
        </ToggleClassContext.Provider>
      </div>
    )
  }
}

class ToggleClassSwitch extends Component {
  render () {
    console.log('ToggleClass.Switch rendered')

    return (
      <ToggleClassContext.Consumer>
        {(value) => {
          const { isOn, onClick } = value

          return (
            <Switch
              isOn={isOn}
              onClick={onClick}
            />
          )
        }}
      </ToggleClassContext.Consumer>
    )
  }
}

class ToggleClassOn extends Component {
  render () {
    const { children } = this.props

    return (
      <ToggleClassContext.Consumer>
        {({ isOn }) => {
          console.log('ToggleClass.On rendered')

          return isOn ? children : null
        }}
      </ToggleClassContext.Consumer>
    )
  }
}

class ToggleClassOff extends Component {
  render () {
    const { children } = this.props

    return (
      <ToggleClassContext.Consumer>
        {({ isOn }) => {
          console.log('ToggleClass.Off rendered')

          return !isOn ? children : null
        }}
      </ToggleClassContext.Consumer>
    )
  }
}

ToggleClass.Switch = ToggleClassSwitch
ToggleClass.On = ToggleClassOn
ToggleClass.Off = ToggleClassOff

export default ToggleClass
