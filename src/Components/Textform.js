import React,{useState} from 'react'

export default function Textform() {
  return (
    <div>
<div className="cont">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea className="form-control tackxt" placeholder='  Enter content here: ' id="exampleFormControlTextarea1" rows="5"></textarea><br></br>
  <button className="btn btn-primary h-14 text-white font-semibold rounded-lg border-white border-double border-4 text-center justify-content p-4 m-6 bg-blue-600">Convert To Uppercase</button>
</div>


    </div>
  )
}
