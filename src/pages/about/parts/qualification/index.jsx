import {QUALIFICATION_LIST} from 'consts/about.js'
import './index.css';
export const Qualification = () => {
  return (
    <div className='qualification_container'>
      <h3>Qualification</h3>
      {QUALIFICATION_LIST.map((item) => (
        <div className='qualification_item'>
          <strong>{item.date}</strong>: {item.qualificationName} {item.status}
            {item.descriptions?.map((description) => (
              <div className='qualification_description'>{description}</div>
            ))}
        </div>
        )
      )}
    </div>
  );
}
