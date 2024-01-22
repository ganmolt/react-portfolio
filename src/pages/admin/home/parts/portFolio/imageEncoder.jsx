import React, { useState } from 'react';

export const ImageEncoder = () => {
  const [imageFile, setImageFile] = useState(null);
  const [encodedImage, setEncodedImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      setEncodedImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {encodedImage && (
        <div>
          <h2>Encoded Image:</h2>
          {encodedImage}
          <img src={`data:image/jpeg;base64,${encodedImage}`} alt="encoded" />
        </div>
      )}
    </div>
  );
};
