import React from 'react'

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'black'];
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  const className = randomColour + '-text';

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>  
  )
  
}

export default Rainbow
