import React from "react";
import { connect } from "react-redux";
// import { increment, decrement, reset } from "./index";

// https://daveceddia.com/redux-mapdispatchtoprops-object-form/

// const increment = (dispatch) => {
//     dispatch({ type: 'INCREMENT', step: 1 })
// }
// const decrement = (dispatch) => {
//     dispatch({ type: 'DECREMENT', step: 1 })
// }
// const reset = (dispatch) => {
//     dispatch({ type: 'RESET' })
// }


function Counter({ count, dispatch }) {

    const addOne =() => dispatch({ type: 'INCREMENT', step: 1 })

    return (
        // simple - null dispatch in connect
        <div>
            <h4>A Component with Methods via dispatch</h4>
            <span>{count}</span>
            <button onClick={addOne}>PLUS</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', step: 1 })}>MINUS</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
        // explicit dispatch
        // <div>
        //     <button onClick={decrement}>-</button>
        //     <span>{count}</span>
        //     <button onClick={increment}>+</button>
        //     <button onClick={reset}>reset</button>
        // </div>
    );
}

const mapStateToProps = state => ({
    count: state.count
});

// const mapDispatchToProps = dispatch => ({
//     decrement: () => dispatch(decrement()),
//     increment: () => dispatch(increment()),
//     reset: () => dispatch(reset())
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter);
export default connect(mapStateToProps)(Counter); // null dispatch