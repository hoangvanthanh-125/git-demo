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
       them dong 1
    them dong 2
     </h1>
     <h2>Nhánh 2</h2>
     <h3>Con flix tuoi lz</h3>

    </div>
  );
}

export default App;
