import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="warni">
        <h4>Touch Button Salam</h4>

        <HelloWorld namaDepan="Saud" namaBelakang="Maruli S" />
        <HelloWorld namaDepan="Maya" namaBelakang="A Pertiwi" />
        <HelloWorld namaDepan="Alita" namaBelakang="Jenong" />

        <p>Thanks for trying this app :)</p>
      </div>
    );
  }
}

export default App;
