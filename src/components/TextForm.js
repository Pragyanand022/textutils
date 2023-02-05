import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleCopyText = (event) => {
    let newtext = document.getElementById("myText")
    navigator.clipboard.writeText(newtext.value)
  }
  const handleExtraSpace = (event) => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'light':'dark'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3" >
          <textarea type="textArea" className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear the textarea</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>copy the text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>remove extra spaces</button>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'light':'dark'}}>
        <h2>Your Text Summery</h2>
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{`${text.length > 0 ? text : 'Write something in the above textarea to preview it here'}`}</p>
      </div>
    </>
  );
}
