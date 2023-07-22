// components/FileItem.js
import React from 'react';
import { useRouter } from 'next/navigation';

const FileItem = ({ name, updated_at, size }) => {
  const icon = '📄';
  const router = useRouter();

  const formattedDate = new Date(updated_at).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleClick = () => {
    router.push(`/file/${name}`);
  };

  return (
    <div
      className="flex w-full transform cursor-pointer flex-col items-center rounded-md border border-zinc-600 p-4 shadow-2xl shadow-zinc-900 transition-transform duration-300 hover:-translate-y-2 hover:opacity-75 sm:w-1/2 md:w-1/2 lg:w-1/4 "
      onClick={handleClick}
    >
      <span className="mb-4 text-center text-7xl">{icon}</span>
      <span className="my-2 mb-2 text-center text-lg font-bold">{name}</span>
      <span className="my-1 mb-2 text-center text-sm font-medium text-gray-500">
        {formattedDate}
      </span>
      <span className="absolute font-normal bottom-2 right-2 text-xs text-gray-500">
        {size} words
      </span>
    </div>
  );
};

export default FileItem;
