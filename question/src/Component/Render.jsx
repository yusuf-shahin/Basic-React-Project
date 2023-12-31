import React, { useState } from 'react';
import questions from './data';
import Questions from './Questions';

const Render = () => {
  const [ques, setQues] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  const showQues = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
    // setActiveId(id);
    // // // setActiveId(console.log(id));
  };

  return (
    <div>
      <Questions ques={ques} activeId={activeId} showQues={showQues} />
    </div>
  );
};

export default Render;
