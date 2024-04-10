import React from "react";
import { useState, useRef } from "react";
const Demo2 = () => {
  console.log("Rendering...");

  const [y, setY] = useState(10);

  let x = 10;
  const ref = useRef(0);
  // console.log(ref);
  // not like ref = 0;
  // ref = { current: 0 }

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      {/* Increase value using Javascript variable */}
      <div className="mt-4">
        <button
          className="bg-green-400 p-2 rounded"
          onClick={() => {
            x = x + 1;
            console.log("x = ", x);
          }}
        >
          Increase x
        </button>
        <span className="mt-4 ml-4"> let x = {x}</span>
      </div>
      {/* Increase value using State variable */}
      <div className="mt-4">
        <button
          className="bg-green-400 p-2 rounded"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span className="mt-4 ml-4"> State y = {y}</span>
      </div>

      {/* Increase value using ref variable */}
      <div className="mt-4">
        <button
          className="bg-green-400 p-2 rounded"
          onClick={() => {
            // change the ref by directly mutate it
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="mt-4 ml-4"> Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
