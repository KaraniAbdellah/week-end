import EnhancedComponent from "./HOC";

const Person1 = ({ money, increaseMoney }) => {
  return (
    <div>
      <h3>X Has: {money}</h3>
      <button onClick={increaseMoney}>Increase it</button>
    </div>
  );
};

export default EnhancedComponent(Person1);
