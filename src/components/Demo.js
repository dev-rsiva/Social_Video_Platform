import React from "react";
import { useState, useMemo } from "react";
import { findNthPrime } from "../utills/helper";
const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //heavy operarion for "123456"
  //With Memoize
  //   const prime = useMemo(() => findNthPrime(text), [text]);
  //Without Memoize
  const prime = findNthPrime(text);

  console.log("Rendering...");
  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        isDarkTheme ? "bg-gray-500 text-white" : ""
      }`}
    >
      <div>
        <div>
          <button
            className="m-10 p-2 bg-green-400"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Toggle
          </button>
        </div>
        <input
          className="border border-blue-500 w-72 px-2 "
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="mt-4 font-bold text-2xl">
        <h1>nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
