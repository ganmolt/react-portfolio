import {OTHER_LIST} from 'consts/about.js'
import './index.css';
export const Other = () => (
  <div className='other_container'>
    <h3>Other</h3>
    {OTHER_LIST.map((item) => (
      <div className='other_item'>
        <strong>{item.otherName}</strong>
          {item.descriptions?.map((description) => (
            <div className='other_description'>{description}</div>
          ))}
      </div>
      )
    )}
  </div>
);
