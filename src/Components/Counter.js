import React, {useState} from "react";

function Counter() {
    const [Count, setCount] = useState(0)

    return(
        <div className="container my-5">
            <div className="card text-center my-5">
            <div className="card-body">
                <h1>Counter App</h1>
                <div className="my-5"></div>
                <h2 className="my-5">{Count}</h2>
                <button className="btn btn-success mx-3" onClick={() => setCount(Count + 1)}>Increment</button>
                <button className="btn btn-danger mx-3"  onClick={() => setCount(Count - 1)}>Decrement</button>
                <button className="btn btn-secondary mx-3"  onClick={() => setCount(0)}>Reset</button>
            </div>
            </div>
        </div>
    );
}

export default Counter;