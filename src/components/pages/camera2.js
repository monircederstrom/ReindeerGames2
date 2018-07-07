import React, { Component } from 'react';
import Camera from 'react-camera';

export default class Webcam extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
  }

  render() {
    return (
      <div style={style.container}>
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        />
          <div id="navbuttons">
              <a className="btn-floating btn-large waves-effect waves-light red white-text center-align" id="save">save</a>
          </div>
      </div>
    );
  }
}

const style = {
  preview: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '50%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 26,
    width: 26,
    color: '#000',
    justifyContent: 'center',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};
