import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = (props) => {
  const [visible, setVisible] = useState(false);
  const {position, content, children } = props;

  const tooltipPosition = () => {
    switch (position) {
      case "top":
        return "tooltip-top";
      case "bottom":
        return "tooltip-bottom";
      case "left":
        return "tooltip-left";
      case "right":
        return "tooltip-right";
      default:
        return "tooltip-top";
    }
  };

  return (
    <div className="tooltip-container" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && (<div className={`tooltip-box ${tooltipPosition()} `}>{content}</div>)}
    </div>
  );
};

export default Tooltip;
