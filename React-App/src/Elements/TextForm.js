import React, {useState} from 'react';

export default function TextForm(props) {

  const handleUpClick = () =>{
    console.log("Uppercase was click");
    let newText = text.toUpperCase(); // change to upper case
    setText(newText);
   //setText("You have clicked on Handle Up Click"); //rename after click 
  }
  const handleLoClick = () =>{
    console.log("Lowercase was click");
    let newText = text.toLowerCase(); // change to lower case
    setText(newText);
   //setText("You have clicked on Handle Up Click"); //rename after click 
  }

  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value); // can write into box
  }

  const handleSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState('Enter Text Here'); //1st state
  //setText('abc'); //change "Enter Text Here" it
  //<h1>{props.heading} - {text}</h1> // combine 2 text
  return (
    <>
        <div className="container">
      <h1>{props.heading}</h1>
<div className="mb-2">
<label for="fBox" className="form-label"></label>
  <textarea className="form-control" value= {text} onChange={handleOnChange} id="fBox" rows="4"></textarea>
</div>
<button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert Uppercase</button> 
<button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert Lowercase</button> 
<button type="button" className="btn btn-primary mx-1" onClick={handleSpace}>Remove Space</button> 
    </div>

    <div className="container my-2">
      <h5>Its text summary</h5>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read time</p>
      <h6>Preview</h6>
      <p>{text.length>0?text:"Enter Something Here"}</p>
      </div> 

    </>

  )
}
