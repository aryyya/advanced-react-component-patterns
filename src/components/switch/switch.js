import React from 'react'
import './switch.css'
import classNames from 'classnames'

const Switch = ({
  isOn,
  onClick
}) => {
  return (
    <div
      className={classNames('switch', {
        'switch--is-on': isOn
      })}
      onClick={onClick}
    >
      <div className="switch__inner" />
    </div>
  )
}

export default Switch
