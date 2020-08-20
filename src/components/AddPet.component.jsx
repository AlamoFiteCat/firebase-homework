import React, { useState } from 'react';
import { projectFirestore } from '../firebase/config';

const AddPetComponent = () => {
  const [formData, updateFormData] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    projectFirestore.collection('awwpics').add({
      ...formData,
    });
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h4>Add a new pet!</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Pet Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="species"
                placeholder="Pet Species"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="age"
                placeholder="Pet Age"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="url"
                placeholder="Picture Link"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="alt"
                placeholder="Short description"
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-outline-success" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPetComponent;
