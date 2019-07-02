import React from 'react'
import './switch.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Switch = ({
  isOn,
  onClick,
  ...props
}) => (
  <div
    className={classNames('switch', {
      'switch--is-on': isOn
    })}
    onClick={onClick}
    {...props}
  >
    <div className="switch__inner" />
  </div>
)

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default Switch
