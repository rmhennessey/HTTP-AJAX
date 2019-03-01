import React, { Component } from 'react'

export default class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            friend: this.props.activeFriend || {
                name: '',
                age: '',
                email: ''
            }
        }

    }

    componentDidUpdate(prevProps) {
        if(
            this.props.activeFriend &&
            prevProps.activeFriend !== this.props.activeFriend
        ) {
            this.setState({
                friend: this.props.activeFriend
            })
        }
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

    handleSubmit = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
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
