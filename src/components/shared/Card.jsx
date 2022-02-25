import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, reverse }) {

  const cardStyles = {
    backgroundColor: reverse ? 'rgba(0,0,0,0.4' : '#fff',
    color: reverse ? '#fff' : '#000',
  };

  return (
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    <div 
      className="card" 
      style={cardStyles}>
      {children}
    </div>
  )
}

// Penamaan default, jika tidak ada 
Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card