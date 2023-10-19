import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEC, DIV, INC, MUL } from "../states/reducers";

function Redux_demo() {
  const state = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-dark py-5 text-white">
        <h1>Using React Redux</h1>
      </div>
      <div className="pt-5">
        <h1>{state}</h1>
        <div className="pt-4">
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(INC(100))}
          >
            Increment
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(DEC(50))}
          >
            Decrement
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(MUL(5))}
          >
            Multiply
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => dispatch(DIV(200))}
          >
            Divide
          </button>
        </div>
      </div>
    </>
  );
}

export default Redux_demo;
