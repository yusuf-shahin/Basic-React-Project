import Card from './Card';

const Concept = ({ people }) => {
  return (
    <section>
      {people.map((element) => (
        <Card key={element.id} {...element} />
      ))}
    </section>
  );
};

export default Concept;
