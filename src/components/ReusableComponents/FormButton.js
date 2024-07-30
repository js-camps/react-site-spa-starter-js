import React from "react";
import PropTypes from "prop-types";

const FormButton = (props) => {
    return (
        <button
            onClick={props.handleButtonClick}
            className={props.classType || "primary"}
            disabled={props.isDisabled}
        >
            {props.buttonText}
        </button>
    );
};

FormButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    classType: PropTypes.string,
    handleButtonClick: PropTypes.func,
    isDisabled: PropTypes.bool, // Added isDisabled to propTypes
};

export default FormButton;
