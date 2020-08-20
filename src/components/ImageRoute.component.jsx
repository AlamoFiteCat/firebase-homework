import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const ImageRouteComponent = (props) => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    projectFirestore
      .collection("awwpics")
      .doc(props.match.params.id)
      .get()
      .then((doc) => {
        const newPet = doc.data();
        setPet(newPet);
      });
  }, [props.match.params.id]);
  console.log(pet);
  return <div>{pet.url}</div>;
};

export default ImageRouteComponent;
