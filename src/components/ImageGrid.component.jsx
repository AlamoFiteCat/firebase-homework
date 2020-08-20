import React, { Component } from 'react';
import ImageComponent from './Image.component';
import { projectFirestore } from '../firebase/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class ImageGridComponent extends Component {
  constructor(props) {
    super(props);
    this.documents = [];
    this.state = {
      docs: [],
    };
  }

  componentDidMount() {
    projectFirestore.collection('awwpics').onSnapshot((snap) => {
      // Have to reset the documents collection to prevent double pictures
      this.documents = [];
      snap.forEach((doc) => {
        this.documents.push({ ...doc.data(), id: doc.id });
      });
      this.setState({ docs: this.documents });
    });
  }

  deletePicture = (pictureId) => {
    projectFirestore
      .collection('awwpics')
      .doc(pictureId)
      .delete()
      .then(() => {
        console.log('Image deleted!');
      });
  };

  render() {
    return (
      <div className="img-grid">
        {this.state.docs &&
          this.state.docs.map((doc) => (
            <div className="img-wrap" key={doc.id}>
              <ImageComponent url={doc.url} alt={doc.alt} />
              <button
                className="btn btn-danger btn-style"
                onClick={() => this.deletePicture(doc.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <div className="info-block">
                <p>{doc.alt}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
