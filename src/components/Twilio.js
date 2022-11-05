import React, { Component } from 'react'
import VideoChat from '../VideoChat';

class Twilio extends Component {



  render() {
    return (
      <div className="container" style={{marginTop: "50px"}}>
          <header>
          Welcome to My Twilio Video Chat
           </header>
        <main>
        <VideoChat />
        </main>
<footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="React">
            ⚛️
          </span>{' '}
          by <a href="https://twitter.com/PATRIOTWICK">Mushhood Afsar</a>
        </p>
      </footer>
      </div>
    )
  }
}
export default Twilio;