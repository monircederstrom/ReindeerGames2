import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './dropPhoto.css';
import { Link } from "react-router-dom";



const CLOUDINARY_UPLOAD_PRESET = 'i079nkge';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/amyecs1896/upload';


export default class DropPhotos extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        uploadedFile: null,
        uploadedFileCloudinaryUrl: ''
      };
    }
  
    onImageDrop(files) {
      this.setState({
        uploadedFile: files[0]
      });
  
      this.handleImageUpload(files[0]);
    }
  
    handleImageUpload(file) {
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);
  
      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }
  
        if (response.body.secure_url !== '') {
          this.setState({
            uploadedFileCloudinaryUrl: response.body.secure_url
          });
        }
      });
    }
  
    render() {
      return (
        <form>
          <div className="FileUpload">
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept="image/*">
              <div>Click to select a file to upload.</div>
            </Dropzone>
          </div>
  
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img className="droppedPhoto" src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>
        <a href="/play" className="waves-effect waves-light btn" id="newuser">Back</a>
        </form>
      )
    }
  }
  //lkhj
