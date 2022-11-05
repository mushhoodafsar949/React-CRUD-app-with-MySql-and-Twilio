import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div style={{marginTop: "200px"}}>
       <h1 style={{color:"Blue"}}> Welcome To My MERN Stack Based Data Center And Twilio Video Chat!</h1>
       <h4 style={{marginTop:"30px", color:"gray"}}>This app is created for lajos Szabo. The app is made from following stacks:</h4>
       <div style={{marginTop:"30px", color:"gray"}}>
        <h6>Frontend: React + Bootstrap</h6>
        <h6>Backend: Node.js + Express.js + MySql(Deployed on Xampp server)</h6>
        <h6>APIs: REST APIs (GET POST PUT)</h6>
        <div style={{marginTop:"10px", color:"gray", backgroundColor:"black"}}>
        <h6>Created By Mushhood Afsar</h6>
        <h6>Whatsapp contact: +923115191759 <a href='https://wa.me/qr/2ZMTUI5OLXG2P1'>whatsapp</a></h6>
        <h6>Check My Website :)</h6>
        <a href='https://mushhoodafsar.software/home'>mushhoodafsar.software</a>

        </div>
        
       </div>
      </div>
    )
  }
}
export default Home; 