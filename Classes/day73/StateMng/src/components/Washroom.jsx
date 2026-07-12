import React from 'react'

const Washroom = ({user}) => {

  return (
    <div className={`wash ${user}`}>{user} Washroom</div>
  )
}

export default Washroom