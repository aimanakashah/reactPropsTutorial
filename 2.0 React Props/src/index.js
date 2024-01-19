import React from "react";
import ReactDOM from "react-dom";

//passing 'props' as a object so that we can called the property inside it such as 'props.name = object.property'
function Card(props) {
  return (
    <div>
      {/* <h1>{props.gender}</h1> */}
      {/* className can only be called inside this */}
      <h2 id="title" className={props.className}>
        {props.name}
      </h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    {/* 'name', 'gender' can be called anything for us to retrive it in the function Card() as it is a property */}
    <Card
      // gender="female"
      //className cant be called the custom componet, <Card/> see it things inside it as property
      className="title"
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />

    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);
