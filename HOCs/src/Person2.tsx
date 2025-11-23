import EnhancedComponent from "./HOC";

const Person2 = ({ money, increaseMoney }) => {
  return (
    <div>
      <h3>Y Has: {money}</h3>
      <button onClick={increaseMoney}>Increase it</button>
    </div>
  );
};

export default EnhancedComponent(Person2);
