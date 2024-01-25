import axios from "axios";
import Cookies from "js-cookie";

import React, { useState } from 'react';

export const WorkCreator = () => {
  const [imageFile, setImageFile] = useState(null);
  const [encodedImage, setEncodedImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [tech, setTech] = useState('');

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

  const handleFormSubmit = () => {
    return axios.post(`${process.env.REACT_APP_API}/admin/works/create`, {
        name: name,
        description: description,
        url: url,
        tech: tech,
        encodedImg: encodedImage,
      }, {
        headers: {
          "access-token": Cookies.get("_access_token"),
        },
      }
    );
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>URL:</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div>
        <label>Tech:</label>
        <input type="text" value={tech} onChange={(e) => setTech(e.target.value)} />
      </div>

      <input type="file" onChange={handleImageChange} />
      {encodedImage && (
        <div>
          <h2>Encoded Image:</h2>
          <p>{`Name: ${name}`}</p>
          <p>{`Description: ${description}`}</p>
          <p>{`URL: ${url}`}</p>
          <p>{`Tech: ${tech}`}</p>
          <img src={`data:image/jpeg;base64,${encodedImage}`} alt="encoded" />
          <button onClick={handleFormSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};
