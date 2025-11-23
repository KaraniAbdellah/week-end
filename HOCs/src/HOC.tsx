import { useState } from "react";
const EnhancedComponent = (OriginalComponent) => {
  function NewComponet() {
    const [money, setMoney] = useState(0);
    const increaseMoney = () => {
      setMoney(money + 1);
    };
    return <OriginalComponent money={money} increaseMoney={increaseMoney} />;
  }
  return NewComponet;
};

export default EnhancedComponent;
