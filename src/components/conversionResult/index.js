import React from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner";
import "./styles.scss";

const ConversionResult = ({ result, rate, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        result &&
        rate && (
          <div className="conversionResultWrapper">
            <div className="result">{result}</div>
            <div className="rate">{`Current rate = ${rate}`}</div>
          </div>
        )
      )}
    </>
  );
};

ConversionResult.propTypes = {
  result: PropTypes.string,
  rate: PropTypes.string,
  from: PropTypes.string,
  into: PropTypes.string,
  isLoading: PropTypes.bool
};

export default ConversionResult;
