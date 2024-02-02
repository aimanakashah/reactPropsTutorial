import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [itemList, setItemList] = useState([]); //declaring object, {titleList: "", textList: ""} in the state array of the function will be treated as one object with the key=0

  //parameter, (tajuk, textList) that was passed here when the button in CreateArea was clicked, CAN BE ANYTHING, BUT MUST RECEIVE BE IN THE RIGHT ORDER
  function addItem(textList, tajuk) {
    setItemList((prevItems) => {
      return [...prevItems, { title: textList, note: tajuk }]; //the 'title', 'note' are the properties name that will be stored in the itemList array
    });
    console.log(itemList);
  }

  function deleteItem(id) {
    setItemList((prevList) => {
      return prevList.filter((item, index) => {
        //the filter method creates new array
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {itemList.map((item, index) => (
        <Note
          onDelete={deleteItem}
          key={index}
          id={index}
          title={item.title}
          content={item.note}
        />
        //received the properties (title, note) from the itemList array first before passing as props to be display in Note.jsx
        //id={index} will be treated as props for said object even if it is not read in Note.jsx
      ))}

      <Footer />
    </div>
  );
}

export default App;
