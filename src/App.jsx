import Header from "./components/Header";
import { useEffect, useReducer } from "react";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],
  status: "loading", // 'loading' 'error', 'ready', 'active', 'finished'
  index: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case 'start':
      return {
        ...state,
        status: 'active'
      }
    default:
      throw new Error("Action Unknown!");
  }
};

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Main>
        <Header />
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && 
          <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch} 
          />
        }
        {status === "active" && <Question question={questions[index]}/>}
      </Main>
    </div>
  );
}

export default App;
