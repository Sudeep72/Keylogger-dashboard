// components/FileItem.js
import React from 'react';

const FileItem = ({ name, updated_at, size }) => {
  const icon = '📄';

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <span className="mr-2">{icon}</span>
      <span className="mr-2">{name}</span>
      <span className="ml-2 text-xs text-gray-500">{updated_at}</span>
      <span className="ml-2 text-xs text-gray-500">{size} bytes</span>
    </div>
  );
};

export default FileItem;
