import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import logo from "../images/logo.png";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {},
      redirect: false
    }
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    //console.log(this.props.match.params.id);
      axios.get(`http://localhost:3001/getpost/${this.props.match.params.id}`)
      .then(res => {
        console.log(res)
          this.setState({ user: res.data[0] })
          //console.log(res.data[0].name);
      });
  }

  deleteUser(event) {
    event.preventDefault();
    console.log(this.state.user._id)
    axios.get(`http://localhost:3001/deletedetails/${this.state.user.id}`)
      .then(res => {
        console.log(res)
          this.setState({ redirect: this.state.redirect === false })
      });
  }

  render() {
    return (
      <div className="container" style={{marginTop: "50px"}}>
        <div className="card text-left">
          <div className="card-header">Name : {this.state.user.name}</div>
              <div className="card-body"> 
                <div className="row">
                  <div className="col-lg-1">
                  <img className="img-thumbnail" style={{marginBottom: "10px"}} src={logo}  alt="user"/><br/>                                            
                  </div>
                  <div className="col-lg-10">
                    <p className="card-text">Email : {this.state.user.email}</p>                 
                    <p className="card-text">Name : {this.state.user.name}</p>
                    {/* <p className="card-text">Job : {this.state.user.job}</p>
                    <p className="card-text">Company : {this.state.user.company}</p>
                    <p className="card-text">Age : {this.state.user.age}</p>                 
                    <p className="card-text">City : {this.state.user.city}</p> */}
                  </div>
                </div>                                        
                  <hr/>
                  <div className="row" style={{marginLeft: "0px"}}>
                    <Link to={this.state.user.id+"/edit"}>
                      <button className="btn btn-primary">Edit user</button>
                    </Link>                  
                    <form onSubmit={this.deleteUser}>
                      <button type="submit" className="btn btn-danger" style={{marginTop: "10px"}}>Delete</button>
                    </form>
                  </div> 
                
                  {this.state.redirect && (
                    <Redirect to={'/users'}/>
                  )}

              </div>
          </div>
      </div>
    )
  }
}
export default User;