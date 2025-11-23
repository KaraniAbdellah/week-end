import EnhancedComponent from "./HOC";

const Person1 = ({ money, IncreaseMoney }) => {
  return (
    <div className="p-6 max-w-sm mx-auto rounded-2xl bg-zinc-900 shadow-lg">
      <h3 className="text-xl font-semibold text-green-400">
        Sara has: <span className="font-bold text-green-300">{money}</span>
      </h3>
      <br />

      <button
        onClick={IncreaseMoney}
        className="px-5 py-2 rounded-xl bg-green-600 text-white font-medium
                   hover:bg-green-500 hover:shadow-md active:scale-95
                   transition-all duration-200"
      >
        Increase
      </button>
    </div>
  );
};

export default EnhancedComponent(Person1);
