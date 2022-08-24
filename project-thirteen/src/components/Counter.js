//import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispath = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispath(counterActions.increment());
  };

  const increaseHandler = () => {
    dispath(counterActions.increase(10));  // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispath(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispath(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* Class Component Example */

//class Counter extends Component {
//  incrementHandler() {
//    this.props.increment();
//  }
//
//  decrementHandler() {
//    this.props.increment();
//  }
//
//  toggleCounterHandler() {}
//
//  render() {
//    return (
//      <main className={classes.counter}>
//        <h1>Redux Counter</h1>
//        <div className={classes.value}>{this.props.counter}</div>
//        <div>
//          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//        </div>
//        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//      </main>
//    );
//  }
//}
//
//const mapStateToProps = (state) => {
//  return {
//    counter: state.counter,
//  };
//};
//
//const mapDispatchToProps = (dispath) => {
//  return {
//    increment: () => dispath({ type: "increment" }),
//    decrement: () => dispath({ type: "decrement" }),
//  };
//};
//
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
