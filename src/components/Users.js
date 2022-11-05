import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          users: []
        }
      }

    componentDidMount() {
        axios.get('http://localhost:3001/getdetails')
        .then(res => {
            console.log(res);
            this.setState({ users: res.data })
        });
    }
    
    render() {

        var data = this.state.users;

        return (
        <div className="users" style={{marginTop: "50px"}}>
            <div className="container"> 
            <div className="row">
                {data.length > 0 ? 
                    data.map((user, i) => {                        
                        return (
                            <div className="col-lg-6" key={user.id}>
                                <div className="card" style={{ marginBottom: "20px"}}>
                                    <div className="card-header text-left">{user.name}</div>
                                    <div className="card-body text-left">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <img className="img-thumbnail" style={{marginBottom: "10px"}} src={logo}  alt="user"/><br/>
                                                <Link to={"users/"+user.id}>
                                                    <button className="btn btn-outline-dark btn-sm">View User</button>
                                                </Link>
                                            </div>   
                                            <div className="col-lg-9">
                                                <ul className="list-group">
                                                    <li className="list-group-item"><b>ID </b>: {user.id}</li>
                                                    <li className="list-group-item"><b>Name </b>: {user.name}</li>
                                                    <li className="list-group-item"><b>Email </b>: {user.email}</li>
                                                </ul>
                                            </div>      
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        )}                       
                    ) : null}                                           
                </div>
            </div>
        </div>
        );
    }
}
export default Users;