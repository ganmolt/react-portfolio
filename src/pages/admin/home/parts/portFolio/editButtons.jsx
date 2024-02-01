import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const EditButtons = ({ id, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");
  const [description, setDescription] = useState("");

  const editButtonSubmit = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API}/admin/works/${id}`,
        {
          name,
          description,
          tech,
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
        onEdit();
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
          <label>
            名前:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            説明:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            使用技術:
            <textarea
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            />
          </label>
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
