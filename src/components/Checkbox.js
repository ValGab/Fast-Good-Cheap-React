import { useState } from "react";

const Checkbox = ({
  checkA,
  setCheckA,
  checkB,
  setCheckB,
  checkC,
  setCheckC,
  text,
}) => {
  const change = () => {
    if (!checkA) {
      setCheckA(true);
      if (checkB && checkC) {
        let result = Math.floor(Math.random() * (3 - 1)) + 1;
        if (result === 1) {
          setCheckB(false);
        } else {
          setCheckC(false);
        }
      }
    } else {
      setCheckA(false);
    }
  };
  const [checked, setChecked] = useState(true); // Pour enlever l'erreur React
  return (
    <div className="item">
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)} // Pour enlever l'erreur React
        checked={checkA}
        onClick={change}
      ></input>
      <p>{text}</p>
    </div>
  );
};

export default Checkbox;
