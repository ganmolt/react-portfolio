import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import './editButton.css'

export const EditButtons = ({
  id,
  // onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [encodedImage, setEncodedImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tech, setTech] = useState("");

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

  const editButtonSubmit = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/admin/works/${id}`,
        {
          name,
          description,
          tech,
          url,
          encodedImg: encodedImage,
        },
        {
          headers: {
            'access-token': Cookies.get('_access_token'),
          },
        }
      );

      // APIからのレスポンスを処理する
      if (res.status === 200) {
        // 編集が成功したら、親コンポーネントに変更を通知する
        // onEdit();
        setIsEditing(false);
      } else {
        console.log('編集に失敗しました');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteButtonClick = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/admin/works/${id}`,
        {
          headers: {
            'access-token': Cookies.get('_access_token'),
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <button onClick={() => deleteButtonClick(id)}>削除</button>
      <button onClick={handleEditClick}>編集</button>

      {isEditing && (
        <div className="edit-form">
          <div>
            <label>name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>URL:</label>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          <div>
            <label>tech:</label>
            <textarea
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            />
          </div>
          <div>
            <input type="file" onChange={handleImageChange} />
            {encodedImage &&
              <div className="work-edit-img-container">
                <img src={`data:image/jpeg;base64,${encodedImage}`} alt="encoded" />
              </div>
            }
          </div>
          <div>
            <button type="button" onClick={editButtonSubmit}>
              編集を適用
            </button>
            </div>
        </div>
      )}

    </>
  );
};
