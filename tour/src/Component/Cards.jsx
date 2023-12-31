import Card from './Card';

const Cards = ({ value, removeItem }) => {
  return (
    <div>
      {value.map((element) => {
        return <Card key={element.id} removeItem={removeItem} {...element} />;
      })}
    </div>
  );
};

export default Cards;
