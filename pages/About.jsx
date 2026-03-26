import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>{this.props.title || 'About us'}</h1>
        <p>we are building a project for a full restaurant management system</p>
      </div>
    );
  }
}

export default About;
