import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    }
  }
  
  render() {
    return (
        <div >
          { this.props.children }
        </div>

        
    );
  }
}

module.exports = App