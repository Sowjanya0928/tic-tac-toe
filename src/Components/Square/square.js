import React from "react";

const Square = ({ value, onClick, highlight }) => {
 // const style = value ? `squares ${value}` : `squares`;
  const style = (value ? `squares ${value}` : `squares`) + (highlight ? ' highlight' : ''); 
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
