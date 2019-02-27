import React from 'react'

export default function Friend(props) {
  return (
    <div>
        <h2>{props.friend.name}</h2>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
    </div>
  )
}
