import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      hometown: ""
    }
  }

  changeUserName(event) {
    this.setState({
      userName: event.target.value
    })
  }

  changeHometown(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({type: "ADD_USER", payload: {userName: this.state.userName, hometown: this.state.hometown}})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" id="hometown" onChange={this.changeUserName.bind(this)}/>
          <input type="text" id="username" onChange={this.changeHometown.bind(this)}/>
        </form>
      </div>
    )
  }
}

export default UserInput;
