import React from "react";

const AddPetComponent = () => {
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
                id="pet-name"
                placeholder="Pet Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="pet-species"
                placeholder="Pet Species"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="pet-age"
                placeholder="Pet Age"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="pet-link"
                placeholder="Picture Link"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="pet-desc"
                placeholder="Short description"
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPetComponent;
