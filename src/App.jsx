import Control from './Components/Control';
import Monitor from './Components/Monitor';
import { useSelector } from 'react-redux';

const App = () => {
  const counter2 = useSelector((state) => state.counter2);
  return (
    <div className="main">
      <h3>APP</h3>
   
      <Monitor />
      <Control />
      <h1>{counter2}</h1>
    </div>
  );
};
export default App;
