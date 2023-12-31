const Card = ({ image, name, age }) => {
  return (
    <article className='flex gap-8'>
      <div className='my-6'>
        <img className='h-[75px] w-[75px] rounded-full' src={image} alt='' />
      </div>
      <div className='my-7 mx-4'>
        <h1 className='2xl font-bold'> {name} </h1>
        <p className='xl '> {age} years </p>
      </div>
    </article>
  );
};

export default Card;
