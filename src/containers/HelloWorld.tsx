import React, { Component } from 'react';

interface Props {
  readonly greeting: string;
  readonly salutation: string;
  getHello: Function;
  getWorld: Function;
}

export class HelloWorld extends Component<Props> {
  onGetHelloClick = () => {
    this.props.getHello();
  };

  onGetWorldClick = () => {
    this.props.getWorld();
  };

  render() {
    const { onGetHelloClick, onGetWorldClick } = this;
    const { greeting, salutation } = this.props;

    return (
      <div>
        <button id="getHello" onClick={onGetHelloClick}>
          {greeting}
        </button>
        <button id="getWorld" onClick={onGetWorldClick}>
          {salutation}
        </button>
      </div>
    );
  }
}
