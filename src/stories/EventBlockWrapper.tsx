import React, { Component } from 'react';

export class EventBlockWrapper extends Component {
  blockEventBubbling = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  render() {
    const { blockEventBubbling } = this;
    const { children } = this.props;

    return <div onClick={blockEventBubbling}>{children}</div>;
  }
}

export default EventBlockWrapper;
