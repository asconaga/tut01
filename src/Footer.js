import React from 'react'

const Footer = (props) => {

  const nLen = props.items.length;
  return (
    <footer>
      <p>{nLen} Item{nLen !== 1 ? 's' : ''} - &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
