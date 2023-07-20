// components/FileItem.js
import React from 'react';

const FileItem = ({ name, type, onClick }) => {
  const icon = type === 'folder' ? '📁' : '📄';

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <span className="mr-2">{icon}</span>
      {name}
    </div>
  );
};

export default FileItem;
