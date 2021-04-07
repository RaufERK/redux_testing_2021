import { useSelector } from 'react-redux';

const Monitor = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="main">
      <h3>monitor</h3>
      <h1>{counter}</h1>
    </div>
  );
};

export default Monitor;
