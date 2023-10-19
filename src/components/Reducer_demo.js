import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "MUL":
      return state * 10;
    case "DIV":
      return state / 10;
  }
};

function Reducer_demo() {
  const [state, dispatch] = useReducer(reducer, 500);
  return (
    <>
      <div className="bg-primary py-5 text-white">
        <h1>Using useReducer Hooks</h1>
      </div>
      <div className=" pt-5 ">
        <h1>{state}</h1>
        <div className="pt-4">
          <a
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: "INC" })}
          >
            Increment
          </a>
          <a
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: "DEC" })}
          >
            Decrement
          </a>
          <a
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: "MUL" })}
          >
            Multiply
          </a>
          <a
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: "DIV" })}
          >
            Divide
          </a>
        </div>
      </div>
    </>
  );
}

export default Reducer_demo;
