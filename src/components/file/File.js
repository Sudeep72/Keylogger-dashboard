// components/FileManager.js
'use client';
import FileLoading from '../layout/File_Loading';
import FileItem from './FileItem';
import useSWR from 'swr';

function FileManager() {
	const fetcher = url => fetch(url).then(res => res.json());
	const { data: files, error, isLoading } = useSWR('/api/list-data', fetcher) || [];
	if (error) return <div>{`${error}`}</div>
	if (isLoading) return <FileLoading />

	return (
		<div className="p-4">
			<div className="flex flex-wrap justify-start gap-4">
				{files.map((file, index) => (
					<FileItem key={index} name={file.name} updated_at={file.updated_at} size={file.size} />
				))}
			</div>
		</div>
	);
};

export default FileManager;
