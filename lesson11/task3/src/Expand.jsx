import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";

const Expand = ({ title, children, onOpen, isOpen, onClose }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button
          className="expand__toggle-btn"
          onClick={!isOpen ? onOpen : onClose}
        >
          <i className={`fa fa-solid fa-angle-${!isOpen ? "down" : "up"}`}></i>
        </button>
      </div>
      {!isOpen ? null : <div className="expand__content">{children}</div>}
    </div>
  );
};

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Expand.defaultProps = {
  title: "",
  isOpen: false,
};

export default Expand;
