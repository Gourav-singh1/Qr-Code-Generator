import React, { useState } from "react";
import { saveAs } from "file-saver";

function QrCode() {
  const [InputValue, setInputValue] = useState("100");
  const [TextValue, setTextValue] = useState("");
  const qrImage = document.getElementById("qrImage");
  let qrLink = "";
  function Generateqr() {
    if (TextValue == "") {
      alert("please Enter Text Or Paste Link Here");
    } else {
      var gapi =
        "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
      qrImage.src = `${gapi}${InputValue}x${InputValue}&chl=${TextValue}`;
      qrLink = qrImage.src;
    }
  }
  function downloadImages() {
    if (qrLink == "") {
      alert("Please Generate Qr Code");
    } else {
      saveAs(qrImage.src, "Qr-Code");
    }
  }
  return (
    <>
      <div className="min-h-screen  flex justify-center items-center py-4">
        <div className="w-[372px]">
          <h2 className="text-white text-center ff_DsSans font-semibold text-2xl">
            Qr Code Generator
          </h2>
          <div className="flex justify-center mt-6">
            <img id="qrImage" src="" alt="" />
          </div>
          <select
            name="size"
            id="value"
            value={InputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="w-full bg-[#3b4148] py-2 px-3 text-white outline-none ff_DsSans font-normal mt-6"
          >
            <option value="100">100x100</option>
            <option value="200">200x200</option>
            <option value="300">300x300</option>
            <option value="400">400x400</option>
          </select>
          <textarea
            value={TextValue}
            onChange={(e) => setTextValue(e.target.value)}
            id="qrText"
            rows="4"
            className="w-full mt-9 bg-[#3b4148] outline-none p-3 text-white ff_DsSans"
            placeholder="Enter Text Or Paste Link Here"
          ></textarea>
          <div className="text-center mt-9">
            <button
              className=" uppercase text-white bg-[#0d536a] py-3 px-9 ff_DsSans font-bold text-lg"
              onClick={Generateqr}
            >
              Generate
            </button>
            <button
              className=" uppercase text-white bg-[#0d536a] py-3 px-9 ff_DsSans font-bold text-lg ms-6"
              onClick={downloadImages}
            >
              download
            </button>
          </div>
          <h2 className=" text-center text-white mt-5">Made by Gourav❤️</h2>
        </div>
      </div>
    </>
  );
}

export default QrCode;
