import React, { useState } from "react";

// let name = "sambhav";
export default function Textform() {
  const [text, setText] = useState("Sample text");
  let newText = text.toUpperCase();
  let tackxt = document.getElementById("exampleFormControlTextarea1");
  let words = text.split(" ");
  let initCap = "";

  words.forEach((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    initCap = initCap + word + " ";
  });

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

        <div className=" mx-auto  w-fit  ">
          <button
            className="btn mx-4 btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center justify-center	 px-4 py-2  my-6  bg-blue-600"
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>

          {/* hello {name} */}

          <button
            type="button"
            className="btn mx-4 btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center  px-4 py-2  my-3 bg-blue-600"
            onClick={() => setText(text.toLowerCase())}
          >
            Convert to Lowercase
          </button>

          <button
            type="button"
            className="btn mx-4 btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center  px-4 py-2  my-3 bg-blue-600"
            onClick={() => {
              try {
                tackxt.style.fontWeight = 700;
                tackxt.style.fontSize = "x-large";
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Bold Text
          </button>

          <button
            type="button"
            className="btn mx-4 btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center  px-4 py-2  my-3 bg-blue-600"
            onClick={() => {
              try {
                tackxt.style.fontWeight = 400;
                tackxt.style.fontSize = "medium";
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Lighter text
          </button>

          <button
            type="button"
            className="btn mx-4 btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center  px-4 py-2  my-3 bg-blue-600"
            onClick={() => {
              setText(initCap);
            }}
          >
            Initcap
          </button>
        </div>
        <div className="analysis mx-auto p-4 w-[60%] bg-green-200">
          <div className="textinfo justify-center my-3 items-center text-center">
            {text.trim().split(" ").length}words and {text.length} characters
            <br></br>
            Will take the developer approximately{" "}
            {Math.floor(text.trim().split(" ").length / 1.93)} seconds to read coz he is a slow reader.
          </div>

          <div className="preview justify-center items-center text-center">
            <div className="heading my-1 text-4xl">Preview</div>
            <div className="text-xl textpreview">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
