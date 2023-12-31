const Card = ({ id, name, image, info, price, removeItem }) => {
  // removeItem(id);
  return (
    <div>
      <img src={image} alt='' />
      <h1> {name} </h1>
      <p> {info} </p>
      <button
        className='my-3 px-4 py-2 bg-red-800 text-white font-bold '
        onClick={() => removeItem(id)}
      >
        {' '}
        not interested
      </button>
    </div>
  );
};

export default Card;
