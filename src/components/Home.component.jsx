import React from 'react';

const HomeComponent = () => {
  return (
    <div className="container home-comp">
      <div className="card">
        <div className="card-header">Aww Bomb!</div>
        <div class="card-img-top card-pic" />
        <div className="card-body">
          <h5 className="card-title">Hello There!</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Welcome to the Aww Bomb App!
          </h6>
          <p className="card-text">
            This is an app created for an ongoing homework assignment at the
            Seavus Education &amp; Development Center.
            <br />
            It uses <strong>Google Firebase</strong> as BaaS as well as
            <strong>Google Firestore</strong> as a live NoSQL database.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
