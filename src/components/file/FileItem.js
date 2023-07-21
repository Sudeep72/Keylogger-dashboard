// components/FileItem.js
import React from 'react';
import '../../styles/globals.css';

const FileItem = ({ name, updated_at, size }) => {
  const icon = '📄';

  return (
    <div className="file-card cursor-pointer p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 shadow-2xl shadow-zinc-900 border border-zinc-600 rounded-md flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:opacity-75 ">
      <span className="mb-4 text-7xl text-center">{icon}</span>
      <span className="mb-2 my-2 text-center font-bold text-lg">{name}</span>
      <span className="text-sm text-gray-500 mb-2 my-1 text-center font-medium">{updated_at}</span>
      <span className="text-xs text-gray-500 absolute bottom-2 right-2">{size} words</span>
    </div>
  );
};

export default FileItem;
