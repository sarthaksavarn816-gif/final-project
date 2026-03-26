import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>{this.props.title || 'Contact'}</h1>
        <p>This is my contact page</p>
      </div>
    );
  }
}

export default Contact;
