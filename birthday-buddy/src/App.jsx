import { useState } from 'react';
import './App.css';
import data from './Component/data';
import Concept from './Component/Concept';

function App() {
  const [people, setPeople] = useState(data);
  // console.log(people);
  // const [text, setText] = useState('');
  // const [act, setAct] = useState(false);
  // const [act, setAct] = useState('');
  return (
    <>
      <section className='flex flex-col items-center'>
        <h1 className='my-3 text-4xl font-bold text-teal-800 '>
          {' '}
          Today is {people.length} people's Birthday{' '}
        </h1>
        <Concept people={people} />
        <button className='px-6 py-3 mt-3 font-bold bg-red-800 text-white'>
          {' '}
          Clear All{' '}
        </button>
      </section>
      {/* <input
        type='text'
        onChange={(e) => {
          setText(e.target.value);
        }}
        className='w-80 px-4 py2 border-2'
      />
      <button
        onClick={() => setAct(text)}
        className='px-4 bg-black text-white '
      >
        {' '}
        Click it{' '}
      </button> */}
      {/* {act && <p className='text-2xl'> {text} </p>} */}
      {/* <p className='text-2xl'> {act} </p> */}
    </>
  );
}

export default App;
