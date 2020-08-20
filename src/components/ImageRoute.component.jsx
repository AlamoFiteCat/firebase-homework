import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const ImageRouteComponent = (props) => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    projectFirestore
      .collection('awwpics')
      .doc(props.match.params.id)
      .get()
      .then((doc) => {
        const newPet = doc.data();
        setPet(newPet);
      });
  }, [props.match.params.id]);
  console.log(pet);
  return (
    <div className="card" style={{ width: '25%' }}>
      <img src={pet.url} className="card-img-top" alt={pet.alt} />
      <div className="card-body">
        <h5 className="card-title">{pet.name}</h5>
        <ul className="list-group">
          <li className="list-group-item">Species: {pet.species}</li>
          <li className="list-group-item">Age: {pet.age}</li>
          <li className="list-group-item">Description: {pet.alt}</li>
          <li className="list-group-item">Likes: {pet.likes}</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageRouteComponent;
