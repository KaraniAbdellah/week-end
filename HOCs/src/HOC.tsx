import { useState } from "react";
const EnhancedComponent = (OriginalComponent) => {
  return function UpdatedComponent() {
    const [money, setMoney] = useState(0);
    const IncreaseMoney = () => {
      setMoney(money + 1);
    };
    return <OriginalComponent money={money} IncreaseMoney={IncreaseMoney} />;
  };
};

export default EnhancedComponent;
