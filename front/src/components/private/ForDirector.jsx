import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ForDirector = ({children}) => {
  const IsDirector = useSelector((state)=>state.userReducer.user.role)
  console.log(IsDirector)
  return (
    <div>
          {IsDirector==="director"?children:null}
    </div>
  )
}

export default ForDirector