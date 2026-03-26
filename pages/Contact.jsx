import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>{this.props.title || 'contact us at'}</h1>
        <p> sarthaksavarn@gmail.com</p>
      </div>
    );
  }
}

export default Contact;
