function Counter(props) {
  return (
    <div className='Counter'>
      <h2> Counter: {props.count}</h2>
      <button onClick={props.handleClick}>Add {props.no}</button>
    </div>
  );  
}

export default Counter;
