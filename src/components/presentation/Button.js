import React from 'react';

const Button = (props) => {
  const { clickHandler, text } = props;
  return (
    <div>
      <button className="Button" type="button" onClick={clickHandler}>
        {text}
      </button>
    </div>
  )
};

export default Button;