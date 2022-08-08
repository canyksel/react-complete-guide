import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  // const valueChangeHandler = (event) => {
  //   setEnteredValue(event.target.value);
  // };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  // const inputBlurHandler = (event) => {
  //   setIsTouched(true);
  // };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  //const reset = () =>{
  //    setEnteredValue('');
  //    setIsTouched(false);
  //}

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };

  // return {
  //   value: enteredValue,
  //   isValid: valueIsValid,
  //   hasError,
  //   valueChangeHandler,
  //   inputBlurHandler,
  //   reset
  // };
};

export default useInput;
