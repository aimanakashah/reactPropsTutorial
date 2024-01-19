import React from "react";
import contacts from "../contacts";

function Card(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name={contacts[1].name} //{array[object].property}
        imgURL={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
