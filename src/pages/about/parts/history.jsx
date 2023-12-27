import {HISTORY_LIST} from 'consts/about/history.js'
import './history.css';
export const History = () => {
  
  return (
    <div className='history_container'>
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
