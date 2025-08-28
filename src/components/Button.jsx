import React from "react";

const Button = ({text}) => {
  return (
    <button
      className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-800 to-cyan-700 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
