import React, { useState } from "react";

// let name = "sambhav";
export default function Textform() {
  const [text, setText] = useState("oldtext");
  let newText = text.toUpperCase();

  function handleUpClick() {
    console.log("Convert to uppercase was clicked");
    setText(newText);
  }

  function handleOnChange(event) {
    console.log("on change listened");
    setText(event.target.value);
  }

  return (
    <div>
      <div className="cont">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className="form-control tackxt"
          placeholder="  Enter content here: "
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <div className="bg-green-500 ">
          <button
            className="btn  btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center justify-content p-4 my-6 mx-auto bg-blue-600"
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>

          {/* hello {name} */}

          {text}

          <button
            type="button"
            className="btn  align-items-center  btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center justify-content p-4 my-3 mx-auto bg-blue-600"
            onClick={() => setText("new text")}
          >
            Update 
          </button>
        </div>
      </div>
    </div>
  );
}
