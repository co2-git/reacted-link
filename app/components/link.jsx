'use strict';

import React from 'react';

class Link extends React.Component {

  static propTypes      =     {
    "href"              :     React.PropTypes.string,
    "to"                :     React.PropTypes.string
  };

  static go (link) {
    window.history.pushState(null, null, link);
  }

  go (e) {
    e.preventDefault();

    Link.go(this.props.to || this.props.href).then(() => {
      if ( this.props.onClick ) {
        this.props.onClick(e);
      }

      if ( this.props.then ) {
        this.props.then(e);
      }
    });
  }

  handler (e) {
    console.log('heloooooooooooooooooooooooooooo');
    e.preventDefault();
    this.go(e.target.href);
  }

  render () {
    return (
      <a
        { ...this.props }
        href      =   { this.props.href || this.props.to || '' }
        onClick   =   { this.handler.bind(this) }
      >hahaha
        { this.props.children }
      </a>
    );
  }
}

export default Link;
