import React from 'react'

import checkIcon from "../assets/check.svg"

const Checkbox = (props: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper">
      <span className="text">Show archived</span>
      <span className="checkbox" onClick={() => props.toggleChecked(!props.isChecked)}>
        <img src={checkIcon} alt="check" style={{ 'opacity': props.isChecked ? "1" : "0" }} />
      </span>
    </div>
  )
}

interface CheckboxProps {
  isChecked: boolean;
  toggleChecked: (state: boolean) => any
}

export default Checkbox
