import React from 'react'

function Tooltip(props) {
    const position=props.position;
  return (

    <div id="tooltip">
        <span id={position}>Thanks for hovering! I'm a tooltip</span>
        <span>Hover over me!</span>
    </div>
  )
}

export default Tooltip