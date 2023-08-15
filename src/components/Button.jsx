import React from "react";

const Button = ({ active, onClick, icon, name, disabled }) => {
  return (
    <button
      className={`py-1 px-2 ${
        active
          ? "text-[#FB6302] bg-[#272727]"
          : "text-[#8C8C8C] hover:bg-[#191919]"
      } flex align-middle items-center justify-center outline-none gap-1 rounded-xl`}
      // className={`${props.className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {name}
    </button>
  );

  if (props.autofocus === true) {
    return (
      <button
        className="bg-white active:bg-[#FB6302] text-[#FB6302] active:text-white font-semibold py-1 px-4 rounded-xl"
        // className={`${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
        autoFocus
      >
        {props.name}
      </button>
    );
  } else {
    return (
      <button
        className="text-[#8C8C8C] hover:bg-[#272727] visited:text-[#FB6302] font-semibold py-1 px-4 rounded-xl"
        // className={`${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.name}
      </button>
    );
  }
};

export default Button;
