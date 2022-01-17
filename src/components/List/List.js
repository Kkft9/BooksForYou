import React from 'react';

export default function List(props) {
  const elements = props.elements || []; // Array of books
  const component = props.component; // Card component

  const createReactElement = (element) => {
    
    return React.createElement(component, { book : element })
  }

  return (
    <div className="row bg">
      {elements.map(e => createReactElement(e))}
    </div>
  )
}