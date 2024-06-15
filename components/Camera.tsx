"use client";
import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import CloseIcon from '@mui/icons-material/Close';

const Camera: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsCameraOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsCameraOpen(true);
  }, []);

  return (
    <div>
      {!isCameraOpen ? (
        <div>
          <button onClick={handleOpen}>        <img src="/images/vid.svg" alt="" className='h-[24px] w-[24px]'/></button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            style={{ maxWidth: '500px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}
          />
          <button onClick={handleClose}>
            <CloseIcon/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Camera;
