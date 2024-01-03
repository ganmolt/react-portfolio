import {HOBBY_LIST} from 'consts/about.js'
import './index.css';
export const Hobby = () => {
  return (
    <div className='hobby_container'>
      <h3>Hobby</h3>
      {HOBBY_LIST.map((item) => (
        <div className='hobby_item'>
          <strong>{item.hobbyName}</strong>
            {item.descriptions?.map((description) => (
              <div className='hobby_description'>{description}</div>
            ))}
        </div>
        )
      )}
    </div>
  );
}
