import { useState } from "react";

const Person2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 max-w-sm mx-auto rounded-2xl bg-green-100 shadow-sm flex items-center justify-between">
      <h3 className="text-lg font-semibold text-green-800">
        Sara has: <span className="font-bold">{count}</span>
      </h3>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 active:scale-95 transition"
      >
        Increase
      </button>
    </div>
  );
};

export default Person2;
