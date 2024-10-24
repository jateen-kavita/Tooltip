import React from 'react';
import Tooltip from './Tooltip';
const App = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <Tooltip content="Tooltip on top" position="top">
        <button className="btn py-3 px-4 bg-red-500 rounded-xl text-white">Hover  me (Top)</button>
      </Tooltip>

      <Tooltip content="Tooltip on bottom" position="bottom">
        <button className="btn py-3 px-4 bg-red-500 rounded-xl text-white">Hover me (Bottom)</button>
      </Tooltip>

      <Tooltip content="Tooltip on left" position="left">
        <button className="btn py-3 px-4 bg-red-500 rounded-xl text-white">Hover me (Left)</button>
      </Tooltip>

      <Tooltip content="Tooltip on right" position="right">
        <button className="btn py-3 px-4 bg-red-500 rounded-xl text-white">Hover me (Right)</button>
      </Tooltip>
    </div>
  );
};

export default App;
