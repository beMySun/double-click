import React from "react";

import { noop } from './util'
import pleaseStopTriggeringClicksOnDoubleClick from './pleaseStopTriggeringClicksOnDoubleClick'

const ClickableBox = ({ onClick, onDoubleClick }) => (
  <button onClick={onClick} onDoubleClick={onDoubleClick}>
    Click or double click
  </button>
);

ClickableBox.defaultProps = {
  onClick: noop,
  onDoubleClick: noop,
};

const EnhancedClickableBox = pleaseStopTriggeringClicksOnDoubleClick(ClickableBox)

const DoubleClickExample = () => (
  <EnhancedClickableBox
    onClick={() => console.log("on click")}
    onDoubleClick={() => console.log("on double click")}
  />
);

export default DoubleClickExample;
