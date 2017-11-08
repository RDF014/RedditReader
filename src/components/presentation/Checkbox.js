import React from 'react';

const Checkbox = (props) => {
  const {sub, checked, addSubreddit, removeSubreddit} = props;
  return (
    <div className="Checkbox">
      <p>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checked ? removeSubreddit(sub) : addSubreddit(sub)}
        />
        {sub}
      </p>
    </div>
  )
};

export default Checkbox;

