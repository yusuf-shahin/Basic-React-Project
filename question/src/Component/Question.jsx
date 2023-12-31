import React from 'react';
import { useState } from 'react';

const Question = ({ id, title, info, activeId, showQues }) => {
  // const [quesValue, setQuesValue] = useState(false);
  // const showQues = (a) => {
  //   setQuesValue(!quesValue);
  // };
  const isActiveId = id === activeId;

  return (
    <div className='my-4'>
      <div className='flex items-center gap-20'>
        <h1 className='2xl font-bold my-10'> {title} </h1>
        <button
          onClick={() => showQues(id)}
          className='px-3 h-9 bg-black text-white'
        >
          {' '}
          Click{' '}
        </button>
      </div>
      {/* {quesValue ? <p>{info}</p> : null} */}
      {/* few new thing discover */}
      {isActiveId && <p>{info}</p>}
      {/* {null && <p>{info}</p>} */}
      {/* {2 && <p>{info}</p>} */}
    </div>
  );
};

export default Question;
