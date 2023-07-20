// components/FileManager.js
'use client';
import React, { useState } from 'react';
import FileItem from './FileItem';
import useSWR from 'swr';

const FileManager = () => {
  const fetcher = url => fetch(url).then(res => res.json());
  const { data: file, error, isLoading } = useSWR('https://api.github.com/repos/vercel/swr', fetcher) || [];
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div className="p-4">
      <div>
        {/* {files.map((file, index) => ( */}
          <FileItem
            name={file.name}
          />
        {/* ))} */}
      </div>
    </div>
  );
};

export default FileManager;
