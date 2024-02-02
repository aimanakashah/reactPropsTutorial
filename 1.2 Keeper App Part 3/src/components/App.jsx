import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [titleList, setTitleList] = useState([]);
  const [textList, setTextList] = useState([]);

  function addItem(inputTitle, inputText) {
    setTitleList((prevTitle) => {
      // return [...prevTitle, { key: titleList.length, title: inputTitle }];
      return [...prevTitle, inputTitle];
    });
    setTextList((prevText) => {
      // return [...prevText, { key: textList.length + 1, content: inputText }];
      return [...prevText, inputText];
    });

    // console.log(textList, titleList);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {titleList.map((title, index) => (
        <Note key={index} id={index} title={title} content="Note content" />
      ))}
      {/* <Note title={titleList} content={textList} /> */}
      <Footer />
    </div>
  );
}

export default App;
