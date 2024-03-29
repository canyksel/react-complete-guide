import React, { useCallback, useEffect, useMemo, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifer,
    clear,
  } = useHttp();

  //const [userIngredients, setUserIngredients] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState();

  // useEffect(() => {
  //   fetch(
  //     "https://react-prep-e7c98-default-rtdb.firebaseio.com//ingredients.json"
  //   ).then((response) =>
  //     response.json().then((responseData) => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setUserIngredients(loadedIngredients);
  //     })
  //   );
  // }, []);

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === 'ADD_INGREDIENT') {
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...reqExtra }
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    //setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        "https://react-prep-e7c98-default-rtdb.firebaseio.com/ingredients.json",
        'POST',
        JSON.stringify(ingredient),
        ingredient,
        'ADD_INGREDIENT'
      );
      //dispatchHttp({ type: "SEND" });
      ////setIsLoading(true);
      //fetch(
      //  "https://react-prep-e7c98-default-rtdb.firebaseio.com/ingredients.json",
      //  {
      //    method: "POST",
      //    body: JSON.stringify(ingredient),
      //    headers: { "Content-Type": "application/json" },
      //  }
      //)
      //  .then((response) => {
      //    //setIsLoading(false);
      //    dispatchHttp({ type: "RESPONSE" });
      //    return response.json();
      //  })
      //  .then((responseData) => {
      //    //setUserIngredients((prevIngredients) => [
      //    //  ...prevIngredients,
      //    //  { id: responseData.name, ...ingredient },
      //    //]);
      //    dispatch({
      //      type: "ADD",
      //      ingredient: { id: responseData.name, ...ingredient },
      //    });
      //  });
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      //setIsLoading(true);
      //dispatchHttp({ type: "SEND" });
      sendRequest(
        `https://react-prep-e7c98-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  //const clearError = useCallback(() => {
  //  //setError(null);
  //  //dispatchHttp({ type: "CLEAR" });
  //  clear();
  //}, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
