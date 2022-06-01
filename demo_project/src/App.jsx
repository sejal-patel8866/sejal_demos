import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default class App extends Component {
  constructor(){
      super()
      this.state={
          Name:'',
          userName:"",
          email:"",
          password:""
      }
      this.changeName=this.changeName.bind(this)
      this.changeuserName=this.changeuserName.bind(this)
      this.changeEmail=this.changeEmail.bind(this)
      this.changePassword=this.changePassword.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
  }
changeName(e){
    this.setState({
        Name:e.target.value
    })
}
changeuserName(e){
    this.setState({
        userName:e.target.value
    })
}
changeEmail(e){
    this.setState({
        email:e.target.value
    })
}
changePassword(e){
    this.setState({
        password:e.target.value
    })
}
onSubmit(e){
    e.preventDefault();
    const register={
        Name:this.state.Name,
        userName:this.state.userName,
        email:this.state.email,
        password:this.state.password
    }
    axios.post("http://localhost:3000/app/signup",register)
    .then(resp=>console.log(resp.data))
  this.setState({
    Name:'',
    userName:"",
    email:"",
    password:""
  })

}

    render() {
    return (
      <div>
          <div className="container">
              <div className="form-div">
                    <form onSubmit={this.onSubmit}>
                    <br></br>
                        <input type="text" placeholder='Name' onChange={this.changeName} value={this.state.Name} className='form-control form-group'/><br></br>
                        <input type="text" placeholder='userName' onChange={this.changeuserName} value={this.state.userName} className='form-control form-group'/><br></br>
                        <input type="email" placeholder='Email' onChange={this.changeEmail} value={this.state.email} className='form-control form-group'/><br></br>
                        <input type="password" placeholder='password' onChange={this.changePassword} value={this.state.password} className='form-control form-group'/><br></br>
                        <input type="submit" className='btn btn-danger btn-block' value='Submit'/>
                   
                    </form>
              </div>
          </div>
      </div>
    )
  }
}
