import React, { useState } from 'react';

interface ExpandTextProps {
  text: string;
  maxLength: number;
  className?: string;
  truncateAtEnd?: boolean;
}

const ExpandText: React.FC<ExpandTextProps> = ({ 
  text, 
  maxLength, 
  className = "", 
  truncateAtEnd = false 
}) => {
    const [showFull, setShowFull] = useState(false);

    let visibleText;
    if (showFull || text.length <= maxLength) {
        visibleText = text;
    } else {
        if (truncateAtEnd) {
            visibleText = `${text.substring(0, maxLength)}...`;
        } else {
            const firstHalf = text.substring(0, maxLength / 2);
            const secondHalf = text.substring(text.length - (maxLength / 2), text.length);
            visibleText = `${firstHalf}...${secondHalf}`;
        }
    }

    const handleClick = () => {
        setShowFull(!showFull);
    };

    return <span onClick={handleClick} className={className}>{visibleText}</span>;
};

export default ExpandText;
