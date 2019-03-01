import React from 'react';
import axios from 'axios';
import Friend from './Friend.js';
import FriendForm from './FriendForm';

export default class Friends extends React.Component {
    constructor() {
        super();
        this.state= {
            activeFriend: null,
            friends: []
    };
}

componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            console.log((response));
            this.setState({ friends: response.data});
        })
        .catch(error => console.log(error));
    }

    addFriend = (friend) => {
        console.log(friend)
        axios
            .post('http://localhost:5000/friends', friend)
            .then(response => {
                this.setState({ friends: response.data});
            })
            .catch(error => {console.log(error)});
    }

    deleteFriend = (e, id) => {
        console.log(id)
        e.preventDefault();
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState({ friends: response.data});
            })
            .catch(error => {console.log(error)});
    };

    setUpdateForm = (e, friend) => {
        console.log(friend)
        e.preventDefault();
        this.setState({ activeFriend: friend})
    }
    
    updateFriend = (e, friend) => {
        e.preventDefault();
        axios
          .put(`http://localhost:5000/friends/${friend.id}`, friend)
          .then(res => {
            this.setState({
              friends: res.data
            });
          })
          .catch(err => {
            console.log(err);
          });
      };

    render() {
    return (
        <div className="container">
            <FriendForm addFriend={this.addFriend} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} /> 
            <div className="friends-list">
                {this.state.friends.map(friend => <Friend key={friend.id} friend={friend} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm} />)}
            </div>
        </div>
    );
    }
}
