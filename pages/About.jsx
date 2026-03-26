import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>{this.props.title || 'About'}</h1>
        <p>This is my about page</p>
      </div>
    );
  }
}

export default About;
