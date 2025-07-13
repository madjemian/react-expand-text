import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandText = ({ text, maxLength, className = "" }) => {
    const [showFull, setShowFull] = useState(false);

    let visibleText;
    if (showFull || text.length <= maxLength) {
        visibleText = text;
    } else {
        const firstHalf = text.substring(0, maxLength / 2);
        const secondHalf = text.substring(text.length - (maxLength / 2), text.length);
        visibleText = `${firstHalf}...${secondHalf}`;
    }

    const handleClick = () => {
        setShowFull(!showFull);
    };

    return <span onClick={handleClick} className={className}>{visibleText}</span>;
};

ExpandText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default ExpandText;