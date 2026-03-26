import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>{this.props.title || 'Home'}</h1>
        <p>This is my home page</p>
      </div>
    );
  }
}

export default Home;
