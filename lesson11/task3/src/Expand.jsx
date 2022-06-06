import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";

const Expand = ({ title, children, onOpen, isOpen, onClose }) => {
  if (!isOpen) {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={onOpen}>
            <i className="fa fa-solid fa-angle-down"></i>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className="fa fa-solid fa-angle-up"></i>
        </button>
      </div>
      <div className="expand__content">{children}</div>
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
