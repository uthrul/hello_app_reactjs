import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="warni">
        <h4>Touch Button Salam</h4>

        <HelloWorld namaDepan="Saud" namatengah="Maruli" namaBelakang="Sihombing" />
        <HelloWorld namaDepan="Maya" namaTengah="Apriliana" namaBelakang="Pertiwi" />
        <HelloWorld namaDepan="Alita" namaTengah="Andrianto" namaBelakang="Jenong" />

        <p>Thanks for trying this app :)</p>
      </div>
    );
  }
}

export default App;
