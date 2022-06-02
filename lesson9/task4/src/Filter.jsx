import React from "react";

const Filter = (props) => {
  const { count, filterText, search } = props;
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        onChange={search}
        value={filterText}
      />
    </div>
  );
};

export default Filter;
