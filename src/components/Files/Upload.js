import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Upload = props => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map(file => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<>
			<section className='container box'>
				<div {...getRootProps({ className: 'dropzone' })}>
					<input {...getInputProps()} />
					<p>Drag 'n' drop some files here, or click to select files</p>
				</div>
			</section>
			<h4>Files</h4>
			<ul>{files}</ul>
		</>
	);
};

export default Upload;
