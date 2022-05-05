import { useState } from 'react';
import Counter from './components/Counter/Counter';

function App() {
  const [counts, setCounts] = useState([0, 0]);

  console.log('initial counts', counts);

  function increase(index, amount) {
    const tempCounts = [...counts];

    const newEl = tempCounts[index] + amount;

    tempCounts.splice(index, 1, newEl);

    setCounts(tempCounts);
  }

  return (
    <div className='App'>
      <Counter no={1} count={counts[0]} handleClick={() => increase(0, 1)} />
      <Counter no={2} count={counts[1]} handleClick={() => increase(1, 2)} />
    </div>
  );
}

export default App;
