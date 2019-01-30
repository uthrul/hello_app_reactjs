import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { Hi: 'Hallo' };
  }

  whatsup = () => {
    this.setState(
      { Hi: 'WhatsUp' }
    );
  }

  render() {
    return (
      <div className="warna">
        {this.state.Hi} {this.props.namaDepan} {this.props.namaTengah} {this.props.namaBelakang}
        <br />
        <button className="tombol" onClick={this.whatsup}>Say Hi!</button>
      </div>
    );
  }
}

export default HelloWorld;
