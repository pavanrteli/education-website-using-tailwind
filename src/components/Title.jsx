import React from "react";

const Title = ({ title, text, link }) => {
  return (
    <div className="flex flex-col md:flex-row mt-5 mb-10 justify-center items-center gap-4">
      <div>
        <h2 className="font-bold text-xl">{title}</h2>
        <p>{text}</p>
      </div>
      <div>
        <button className="bg-white w-25 px-5 py-2 rounded-xl">{link}</button>
      </div>
    </div>
  );
};

export default Title;
