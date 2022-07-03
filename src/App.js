import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  return (
    <div className="App">
      <Checkbox
        checkA={check1}
        setCheckA={setCheck1}
        checkB={check2}
        setCheckB={setCheck2}
        checkC={check3}
        setCheckC={setCheck3}
        text="Fast"
      />

      <Checkbox
        checkA={check2}
        setCheckA={setCheck2}
        checkB={check1}
        setCheckB={setCheck1}
        checkC={check3}
        setCheckC={setCheck3}
        text="Good"
      />

      <Checkbox
        checkA={check3}
        setCheckA={setCheck3}
        checkB={check2}
        setCheckB={setCheck2}
        checkC={check1}
        setCheckC={setCheck1}
        text="Cheap"
      />
    </div>
  );
}

export default App;
