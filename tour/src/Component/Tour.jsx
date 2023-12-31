import { useEffect, useState } from 'react';
import Cards from './Cards';
import IsLoading from './IsLoading';
import SystemError from './SystemError';

const Tour = () => {
  const url = 'https://course-api.com/react-tours-project';
  const [isLoading, setIsloading] = useState(true);
  const [value, setValue] = useState([]);
  const removeItem = (a) => {
    setValue((element) => element.filter((value) => value.id !== a));
  };

  const tourApi = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data);
      setValue(data);
      setIsloading(!isLoading);
    } catch (error) {
      console.log('system error');
    }
  };

  useEffect(() => {
    tourApi();
  }, []);

  return (
    <div>
      {isLoading && <IsLoading />}
      <Cards value={value} removeItem={removeItem} />
    </div>
  );
};

export default Tour;
