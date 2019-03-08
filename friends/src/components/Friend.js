import React from 'react'

export default function Friend(props) {
  return (
    <div>
        <h2>Name: {props.friend.name}</h2>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
        <button onClick={e => props.deleteFriend(e, props.friend.id)}>Delete this Friend</button>
        <button onClick={e => props.setUpdateForm(e, props.friend)}>Update Me Yo</button>
    </div>
  )
}
