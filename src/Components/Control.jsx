import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
const Control = () => {
  const dipatch = useDispatch();
  const increment = () => dipatch({ type: 'INC' });

  const decrement = () => dipatch({ type: 'DEC' });
  return (
    <div className="main">
      <h3>Control</h3>
      <Button onClick={increment} variant="success">
        INC
      </Button>
      <Button onClick={decrement} variant="warning">
        DEC
      </Button>
    </div>
  );
};

export default Control;
