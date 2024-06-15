"use client";
import React, { useCallback, useRef, useState } from 'react';

interface ImageUploadProps {
  onUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | undefined>();

  const handleClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      onUpload(file);
    }
  }, [onUpload]);

  return (
    <div>
      <button onClick={handleClick}>
        <img src="/images/img.svg" alt="" />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {previewImage && (
        <div>
          <img src={previewImage} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
