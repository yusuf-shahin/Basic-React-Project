import React from 'react';
import Question from './Question';
import { useState } from 'react';

const Questions = ({ ques, activeId, showQues }) => {
  return (
    <div className='w-90vw mx-auto bg-white rounded-border p-10 max-w-800 shadow-3"'>
      {ques.map((que) => (
        <Question
          key={que.id}
          activeId={activeId}
          showQues={showQues}
          {...que}
        />
      ))}
    </div>
  );
};

export default Questions;
