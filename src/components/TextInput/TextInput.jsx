import React, { useState } from "react";

import "./textinput.scss";

const TextInput = (props) => {
  const { className, label, value, onChange, type, placeholder } = props;
  const [inputType, setInputType] = useState(type);

  const handleType = () => {
    setInputType(inputType === "text" ? "password" : "text");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <label className={`${className} textinput`}>
      <span className="textinput__text">{label}</span>
      {type !== "textarea" && (
        <div className="textinput__wrapper">
          <input
            className="textinput__input"
            type={inputType}
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={handleChange}
          />
          {type === "password" && (
            <div
              className={`textinput__button ${
                inputType === "password"
                  ? "textinput__button_hidden"
                  : "textinput__button_visible"
              }`}
              onClick={handleType}
            />
          )}
        </div>
      )}
      {type === "textarea" && (
        <div className="textinput__wrapper">
          <textarea
            className="textinput__input"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </div>
      )}
    </label>
  );
};

export { TextInput };
