import React from 'react';
import axios from 'axios';
import Friend from './Friend.js';

export default class Friends extends React.Component {
  constructor() {
      super();
      this.state= {
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
  
  render() {
    return (
        <div className="friends-list">
            {this.state.friends.map(friend => <Friend friend={friend} />)}
        </div>
    );
  }
}
