import React from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`p-6 border-2 border-dashed rounded-lg cursor-pointer ${
        isDragActive ? 'border-blue-500' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag & drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default Dropzone;
