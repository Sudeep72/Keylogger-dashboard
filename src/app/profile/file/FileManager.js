// components/FileManager.js
'use client';
import React, { useState } from 'react';
import FileItem from './file';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const { data } = useSWR('../../api/list-data', fetcher);

const FileManager = () => {
  const [currentPath, setCurrentPath] = useState('/'); // Current path in the file manager
  const [files] = useState([
    { name: 'picture.jpg', type: 'file' },
  ]);

  // Function to handle click on a file or folder
  const handleItemClick = (name, type) => {
    if (type === 'folder') {
      setCurrentPath((prevPath) => `${prevPath}${name}/`);
    }
  };

  // Function to go back to the previous directory
  const handleBack = () => {
    if (currentPath !== '/') {
      setCurrentPath((prevPath) => prevPath.substring(0, prevPath.lastIndexOf('/')));
    }
  };


  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handleBack}>Back</button>
        <span>{currentPath}</span>
      </div>
      <div>
        {files.map((file, index) => (
          <FileItem
            key={index}
            name={file.name}
            type={file.type}
            onClick={() => handleItemClick(file.name, file.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default FileManager;
