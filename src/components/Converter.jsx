import React, { useRef, useState } from "react";

import hexToRgb from "../utils/hexToRgb";

import isHex from "../utils/isHex";

export default function Converter() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const converterRef = useRef();

  function handleChange(event) {
    const value = event.target.value;

    setValue(value);

    if (value.length > 7) {
      setMessage("Ошибка");
      converterRef.current.style.background = "#f55858";
    } else {
      setMessage("");
      converterRef.current.style.background = "#242470";
    }

    if (value.length === 7 && isHex(value)) {
      setMessage(hexToRgb(value));
      converterRef.current.style.background = `${value}`;
    }

    if (value.length === 7 && !isHex(value)) {
      setMessage("Ошибка");
      converterRef.current.style.background = "#f55858";
    }
  }

  return (
    <div ref={converterRef} className="converter">
      <div className="converter-box">
        <input
          className="converter-input"
          type="text"
          name="hex"
          value={value}
          onChange={handleChange}
          placeholder="#242470"
        />
        <div className="converter-response">{message}</div>
      </div>
    </div>
  );
}
