import Category from './Category';

const Categories = ({ category }) => {
  return (
    <section className='btn-container'>
      {category.map((categories) => (
        <Category key={categories.id} {...categories} />
      ))}
    </section>
  );
};

export default Categories;
