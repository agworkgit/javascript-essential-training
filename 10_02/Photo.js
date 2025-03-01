/**
 * Fragment from React Photo Gallery component.
 * By Sandra Gonzales @neptunian
 * @link https://github.com/neptunian/react-photo-gallery
 * The MIT License (MIT)
 * Copyright (c) 2015-2018 Sandra Gonzales
 */

import React from "react"; // import from another component
import PropTypes from "prop-types";

const imgWithClick = { cursor: "pointer" }; // in React devs prefer to use objects for everything

// main exported module below
// a React component is similar to a JS class
const Photo = ({
  index,      // a list of all parameters
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
  key,
}) => { // arrow function that captures the properties to do something on them
  const imgStyle = { margin: margin, display: "block" };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event) => { // event listener
    onClick(event, { photo, index });
  };

  return ( // then the component returns content, written in JSX
    <img
      key={key}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
    />
  );
};

export const photoPropType = PropTypes.shape({ // a set of rules for what the different properties in this component must look like 
  key: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = { // standard object, observe that the methods are using arrow functions here
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  photo: photoPropType.isRequired,
  margin: PropTypes.number,
  top: (props) => {
    if (props.direction === "column" && typeof props.top !== "number") {
      return new Error(
        "top is a required number when direction is set to `column`"
      );
    }
  },
  left: (props) => {
    if (props.direction === "column" && typeof props.left !== "number") {
      return new Error(
        "left is a required number when direction is set to `column`"
      );
    }
  },
  direction: PropTypes.string,
};

export default Photo; // calling this file you get the Photo component and you can make an instance of it
