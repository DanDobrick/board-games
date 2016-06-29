import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <ul className="list">
        {this.props.children}
      </ul>
    );
  }
}
