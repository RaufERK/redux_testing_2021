import { useSelector, useDispatch } from 'react-redux';

const AppTwo = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((store) => store);
  const incr = () => dispatch({ type: 'INC_2' });
  const decr = () => dispatch({ type: 'DEC_2' });

  return (
    <div className="main">
      <h3>app two</h3>
      <h1> {counter}</h1>
      <button onClick={incr}>INC</button>
      <button onClick={decr}>DEC</button>
    </div>
  );
};

export default AppTwo;
