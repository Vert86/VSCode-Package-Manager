// Panel.tsx
import React from 'react';

const Panel = () => {
  // Event handler for uploading files
  const handleUpload = () => {
    window.postMessage({ type: 'uploadFiles' }, '*');
  };

  // Event handler for packaging files
  const handlePackage = () => {
    window.postMessage({ type: 'packageFiles' }, '*');
  };

  // Event handler for unpacking files
  const handleUnpack = () => {
    window.postMessage({ type: 'unpackFiles' }, '*');
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handlePackage}>Package</button>
      <button onClick={handleUnpack}>Unpack</button>
      {/* More UI components as needed */}
    </div>
  );
};

export default Panel;
