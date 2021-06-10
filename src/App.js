import { useReducer } from "react";
import "./App.css";
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "len": {
      return state + action.step;
    }
    default:
      throw new Error("loi");
  }
};
function App({ initValue = 0 }) {
  const onClick = () => {
    setCount({ type: "laen", step: 1 });
  };
  const [count, setCount] = useReducer(reducerFunc, initValue);
  return (
    <div className="App">
     <h1>
       Test Git
     </h1>
    </div>
  );
}

export default App;
