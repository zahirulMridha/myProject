import { useState } from "react";
// $ Destructure problem
//Done: input control
//Done: handle operation
//Done: create history
//  history ui create
//  history function

//TODO: let inputs = {
//   f: 0,
//   s: 0,
// };
function Calculate() {
  //$ for store inputs values
  let [inputState, setInputState] = useState({
    f: 0,
    s: 0,
  });
  //$ for store result
  let [opsState, setOpsState] = useState(0);
  //$ for store history
  let [historyState, setHistoryState] = useState([]);

  //$ inputs handler
  const inputHandler = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  //$ operation handler
  const handlerOps = (e) => {
    let findResult = new Function(
      "e",
      `return ${inputState.f} ${e.target.name} ${inputState.s}`
    );
    //this is other solution but it is not secure
    // setOpsState(eval(`${inputState.f} ${e.target.name} ${inputState.s}`));
    setOpsState(findResult());

    const history = `${inputState.f} ${e.target.name} ${
      inputState.s
    } the Result is ${findResult()}`;
    historyState.push(history);
  };
  //$ clear handler
  const clearHandler = () => {
    setInputState(
      (inputState = {
        f: 0,
        s: 0,
      })
    );
    setOpsState((opsState = 0));
    setHistoryState((historyState = []));
  };

  return (
    <div>
      <h1>Calculation your arithmetic problem</h1>
      <h2>Result : {opsState}</h2>
      <div>
        <p>Enter number to calculation</p>
        <input
          type="number"
          name="f"
          value={inputState.f}
          onChange={inputHandler}
        />
        <input
          type="number"
          name="s"
          value={inputState.s}
          onChange={inputHandler}
        />
      </div>
      <div>
        <p>Operations</p>
        <button name="+" onClick={handlerOps}>
          +
        </button>
        <button name="-" onClick={handlerOps}>
          -
        </button>
        <button name="*" onClick={handlerOps}>
          *
        </button>
        <button name="/" onClick={handlerOps}>
          /
        </button>
        <button onClick={clearHandler}>Clear</button>
      </div>
      <div>
        <h3>History</h3>
        {!historyState.length ? (
          <small>Currently There is no history</small>
        ) : (
          historyState.map((_, i) => <p key={i}>{historyState[i]}</p>)
        )}
      </div>
    </div>
  );
}

export default Calculate;
