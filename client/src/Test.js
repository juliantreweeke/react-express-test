import React, { Component } from 'react';


class Test extends Component {
  // Initialize state
  state = {  }

  // Fetch passwords after first mount
  componentDidMount() {
  
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {


    return (
      <div className="Test">
      
        <p>Test</p>
    
        
        
      </div>
    );
  }
}

export default Test;