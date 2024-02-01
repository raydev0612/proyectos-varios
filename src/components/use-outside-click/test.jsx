/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContext, setShowContext] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContext(false));

  return (
    <div ref={ref}>
      {showContext ? (
        <div>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close. It won't close if you click
            inside of this contentg
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContext(true)}>Show Content</button>
      )}
    </div>
  );
}
