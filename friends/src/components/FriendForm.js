import React, { Component } from 'react'

export default class FriendForm extends Component {
    constructor() {
        super();
        this.state={
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }

    }

    componentDidMount() {

    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
                }
        }))
    };

    handleSubmit = (e, friend) => {
        this.props.addFriend(e, friend)
    }


  render() {
    return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    placeholder='name'
                    name='name'
                    onChange={this.changeHandler}
                    value={this.state.friend.name}
                />
                <input 
                    type='number'
                    placeholder='age'
                    name='age'
                    onChange={this.changeHandler}
                    value={this.state.friend.age}
                />
                <input 
                    type='text'
                    placeholder='email'
                    name='email'
                    onChange={this.changeHandler}
                    value={this.state.friend.email}
                />
                <button>Save Friend</button>
            </form>
        </div>
    )
  }
}
