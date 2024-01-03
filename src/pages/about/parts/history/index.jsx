import {HISTORY_LIST} from 'consts/about.js'
import './index.css';
export const History = () => {
  return (
    <div className='history_container'>
      <h3>History</h3>
      {HISTORY_LIST.map((item) => (
        <div className='history_item'>
          <strong>{item.date}</strong>: {item.event}
            {item.descriptions?.map((description) => (
              <div className='history_description'>{description}</div>
            ))}
        </div>
        )
      )}
    </div>
  );
}
